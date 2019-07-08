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

export default { send };
