import React from 'react';
import './Financing.css';
import FinancingHeader from './FinancingHeader/FinancingHeader';
import FinancingSelect from './FinancingSelect/FinancingSelect';

function Financing() {
  return (
    <div className="Financing">
      <FinancingHeader />
      <FinancingSelect />
    </div>
  );
}

export default Financing;
