const types = {
  SEQURA_WIDGETS_LIB_PRICE: 'Sequra.SequraWidgetsLib.Price',
  FINANCING_WIDGET_READY: 'Sequra.FinancingWidget.Ready',
  FINANCING_WIDGET_OPEN_MODAL: 'Sequra.FinancingWidget.OpenModal',
};

function createMessage(type, payload) {
  return {
    type,
    payload,
  };
}

function send(dest, type, payload) {
  const message = createMessage(type, payload);

  dest.postMessage(message, '*');
}

export default { types, send };
