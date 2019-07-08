const types = {
  SEQURA_WIDGETS_LIB_OPEN_MODAL: 'Sequra.SequraWidgetsLib.OpenModal',
  FINANCING_INFO_WIDGET_CLOSE_MODAL: 'Sequra.FinancingInfoWidget.CloseModal',
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
