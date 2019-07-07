import PropTypes from 'prop-types';
import React from 'react';
import './Financing.css';
import FinancingHeader from './FinancingHeader/FinancingHeader';
import FinancingSelect from './FinancingSelect/FinancingSelect';

function Financing({ price }) {
  if (!price) {
    return <div />;
  }

  return (
    <div className="Financing">
      <FinancingHeader />
      {price && <FinancingSelect />}
    </div>
  );
}

Financing.propTypes = {
  price: PropTypes.number,
};

Financing.defaultProps = {
  price: null,
};

export default Financing;
