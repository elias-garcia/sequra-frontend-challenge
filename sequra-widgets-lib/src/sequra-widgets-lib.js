(() => {
  const financingWidgetUrl = 'http://localhost:8082';
  const financingInfoWidgetUrl = 'http://localhost:8083';

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

  function applyStylesToNode(node, styles) {
    const styledNode = node;

    Object.keys(styles).forEach((key) => {
      styledNode.style[key] = styles[key];
    });

    return styledNode;
  }

  function addFinancingWidgetToDOM() {
    const financingWidgetPlaceholder = document
      .getElementById('sequra-financing-widget');
    const iframe = document.createElement('iframe');

    applyStylesToNode(iframe, getFinancingWidgetStyles());
    iframe.src = financingWidgetUrl;
    financingWidgetPlaceholder.appendChild(iframe);

    return iframe;
  }

  function addFinancingInfoWidgetToDOM() {
    const iframe = document.createElement('iframe');

    applyStylesToNode(iframe, getFinancingInfoWidgetStyles());
    iframe.src = financingInfoWidgetUrl;
    document.body.appendChild(iframe);
  }

  function listenToProductPriceChanges() {
    const nodeToObserve = document.getElementById('product-price');

    new MutationObserver((mutations) => {
      const updatedPrice = mutations[0].addedNodes[0].data;

      console.log(updatedPrice);
    }).observe(nodeToObserve, { childList: true });
  }
  document.addEventListener('DOMContentLoaded', () => {
    addFinancingWidgetToDOM();
    addFinancingInfoWidgetToDOM();
    listenToProductPriceChanges();
  });
})();
