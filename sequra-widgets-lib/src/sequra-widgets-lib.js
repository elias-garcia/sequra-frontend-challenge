(() => {
  const financingWidgetUrl = 'http://localhost:8082';
  const financingInfoWidgetUrl = 'http://localhost:8083';
  const productPriceSelector = '#product-price';
  const messageTypes = {
    SEQURA_WIDGETS_LIB_PRICE: 'Sequra.SequraWidgetsLib.Price',
    FINANCING_WIDGET_READY: 'Sequra.FinancingWidget.Ready',
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
    const financingWidgetPlaceholder = document
      .getElementById('sequra-financing-widget');
    const iframe = document.createElement('iframe');

    applyStylesToElement(iframe, getFinancingWidgetStyles());
    iframe.src = financingWidgetUrl;
    financingWidgetPlaceholder.appendChild(iframe);

    return iframe;
  }

  function addFinancingInfoWidgetToDOM() {
    const iframe = document.createElement('iframe');

    applyStylesToElement(iframe, getFinancingInfoWidgetStyles());
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

  function listenToPostMessages() {
    window.addEventListener('message', (event) => {
      console.log(event);
      switch (event.data.type) {
        case messageTypes.FINANCING_WIDGET_READY:
          sendPriceToFinancingWidget(event.source);
          break;
        default:
          break;
      }
    }, false);
  }

  function listenToProductPriceChanges() {
    const elementToObserve = getProductPriceElement();

    new MutationObserver((mutations) => {
      const updatedPrice = mutations[0].addedNodes[0].data;

      console.log(updatedPrice);
    }).observe(elementToObserve, { childList: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    listenToPostMessages();
    addFinancingWidgetToDOM();
    addFinancingInfoWidgetToDOM();
    listenToProductPriceChanges();
  });
})();
