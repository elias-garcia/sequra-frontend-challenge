import React from 'react';
import './FinancingSelect.css';

function FinancingSelect() {
  return (
    <select className="FinancingSelect">
      <option value="3">3 cuotas de 53,00 €/mes</option>
      <option value="6">6 cuotas de 28,00 €/mes</option>
      <option value="12">12 cuotas de 15,00 €/mes</option>
    </select>
  );
}

export default FinancingSelect;
