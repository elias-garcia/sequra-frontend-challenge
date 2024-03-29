(() => {
  const financingWidgetUrl = 'http://localhost:8082';
  const financingInfoWidgetUrl = 'http://localhost:8083';
  const financingInfoWidget = 'sequra-financing-widget';
  const financingInfoWidgetId = 'sequra-financing-info-widget';
  const productPriceSelector = '#product-price';
  const messageTypes = {
    SEQURA_WIDGETS_LIB_PRICE: 'Sequra.SequraWidgetsLib.Price',
    SEQURA_WIDGETS_LIB_OPEN_MODAL: 'Sequra.SequraWidgetsLib.OpenModal',
    FINANCING_WIDGET_READY: 'Sequra.FinancingWidget.Ready',
    FINANCING_WIDGET_OPEN_MODAL: 'Sequra.FinancingWidget.OpenModal',
    FINANCING_INFO_WIDGET_CLOSE_MODAL: 'Sequra.FinancingInfoWidget.CloseModal',
  };

  function getFinancingWidgetStyles() {
    return {
      border: 'none',
    };
  }

  function getFinancingInfoWidgetStyles() {
    return {
      border: 'none',
      height: '100%',
      width: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '9999999',
      display: 'none',
    };
  }

  function applyStylesToElement(element, styles) {
    const styledElement = element;

    Object.keys(styles).forEach((key) => {
      styledElement.style[key] = styles[key];
    });

    return styledElement;
  }

  function addFinancingWidgetToDOM() {
    const financingWidgetPlaceholder = document.getElementById(financingInfoWidget);
    const iframe = document.createElement('iframe');

    iframe.setAttribute('id', '');
    applyStylesToElement(iframe, getFinancingWidgetStyles());
    iframe.src = financingWidgetUrl;
    financingWidgetPlaceholder.appendChild(iframe);

    return iframe;
  }

  function addFinancingInfoWidgetToDOM() {
    const iframe = document.createElement('iframe');

    applyStylesToElement(iframe, getFinancingInfoWidgetStyles());
    iframe.setAttribute('id', financingInfoWidgetId);
    iframe.src = financingInfoWidgetUrl;
    document.body.appendChild(iframe);
  }

  function createMessage(type, payload) {
    return {
      type,
      payload,
    };
  }

  function getProductPriceElement() {
    return document.querySelector(productPriceSelector);
  }

  function parseProductPrice(productPrice) {
    return parseFloat(productPrice.split(' ')[0].replace(',', '.'));
  }

  function convertEurToCent(price) {
    return price * 100;
  }

  function getProductPrice() {
    const productPriceElement = getProductPriceElement();
    const productPriceInEur = parseProductPrice(productPriceElement.innerText);

    return convertEurToCent(productPriceInEur);
  }

  function sendPriceToFinancingWidget(dest) {
    const price = getProductPrice();
    const message = createMessage(messageTypes.SEQURA_WIDGETS_LIB_PRICE, price);

    dest.postMessage(message, '*');
  }

  function sendCreditAgreementToFinancingInfo(dest, creditAgreement) {
    const message = createMessage(messageTypes.SEQURA_WIDGETS_LIB_OPEN_MODAL, creditAgreement);

    dest.postMessage(message, '*');
  }

  function openFinancingInfoWidget(creditAgreement) {
    const iframe = document.getElementById(financingInfoWidgetId);

    iframe.style.display = 'block';

    sendCreditAgreementToFinancingInfo(iframe.contentWindow, creditAgreement);
  }

  function closeFinancingInfoModal() {
    const iframe = document.getElementById(financingInfoWidgetId);

    iframe.style.display = 'none';
  }

  function listenToPostMessages() {
    window.addEventListener('message', (event) => {
      switch (event.data.type) {
        case messageTypes.FINANCING_WIDGET_READY:
          sendPriceToFinancingWidget(event.source);
          break;
        case messageTypes.FINANCING_WIDGET_OPEN_MODAL:
          openFinancingInfoWidget(event.data.payload);
          break;
        case messageTypes.FINANCING_INFO_WIDGET_CLOSE_MODAL:
          closeFinancingInfoModal();
          break;
        default:
          break;
      }
    }, false);
  }

  function listenToProductPriceChanges(financeWidgetIframe) {
    const elementToObserve = getProductPriceElement();

    new MutationObserver(() => {
      sendPriceToFinancingWidget(financeWidgetIframe.contentWindow);
    }).observe(elementToObserve, { childList: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    listenToPostMessages();

    const financingWidgetIframe = addFinancingWidgetToDOM();

    addFinancingInfoWidgetToDOM();
    listenToProductPriceChanges(financingWidgetIframe);
  });
})();
