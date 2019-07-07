import React from 'react';
import './Financing.css';

function Financing() {
  return (
    <div className="Financing">
      <div className="Financing__header">
        <p className="Financing__header-text">Págalo en</p>
        <button className="Financing__header-button" type="button">Más info</button>
      </div>
      <select className="Financing__select">
        <option value="3">3 cuotas de 53,00 €/mes</option>
        <option value="6">6 cuotas de 28,00 €/mes</option>
        <option value="12">12 cuotas de 15,00 €/mes</option>
      </select>
    </div>
  );
}

export default Financing;
