const MESSAGE_PREFIX = 'Sequra.FinancingWidget';

const types = {
  READY: 'Ready',
};

function createMessage(type, payload) {
  return {
    type: `${MESSAGE_PREFIX}.${type}`,
    payload,
  };
}

function send(dest, type, payload) {
  const message = createMessage(type, payload);

  dest.postMessage(message, '*');
}

export default { types, send };
