import httpClient from '../utils/http-client';

const CREDIT_AGREEMENTS_RESOURCE = 'credit_agreements';

function getCreditAgreements(totalWithTax) {
  return httpClient.get(CREDIT_AGREEMENTS_RESOURCE, {
    params: {
      totalWithTax,
    },
  });
}

export default { getCreditAgreements };
