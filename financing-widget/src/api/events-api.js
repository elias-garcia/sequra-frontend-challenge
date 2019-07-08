import httpClient from '../utils/http-client';

const EVENTS_RESOURCE = 'events';
const EVENTS_CONTEXT = 'financingWidget';

function recordEvent(type, data) {
  httpClient.post(EVENTS_RESOURCE, {
    context: EVENTS_CONTEXT,
    type,
    ...(data || {}),
  });
}

export default { recordEvent };
