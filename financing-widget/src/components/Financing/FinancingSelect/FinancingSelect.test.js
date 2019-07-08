import React from 'react';
import ReactDOM from 'react-dom';
import FinancingSelect from './FinancingSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const creditAgreements = [{
    apr: { value: 2500, string: '25 %' },
    cost_of_credit: { value: 1500, string: '15 €' },
    cost_of_credit_pct: { value: 600, string: '6,00 %' },
    grand_total: { value: 41499, string: '414,99 €' },
    instalment_amount: { value: 13333, string: '133,33 €' },
    instalment_count: 3,
    instalment_fee: { value: 500, string: '5 €' },
    instalment_total: { value: 13833, string: '138,33 €' },
    max_financed_amount: { value: 200000, string: '2000 €' },
    total_with_tax: { value: 39999, string: '399,99 €' },
  }];

  ReactDOM.render(
    <FinancingSelect
      creditAgreements={creditAgreements}
      selectedCreditAgreement={creditAgreements[0]
      }
    />, div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
