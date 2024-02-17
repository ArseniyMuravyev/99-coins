import PropTypes from 'prop-types'
import styles from './SelectCurrency.module.scss'

const SelectCurrency = ({ currencies, selectedCurrency, setSelectedCurrency }) => {
  return (
    <select className={styles.select} value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
      {currencies.map(currency => (
        <option key={currency} value={currency}>{currency}</option>
      ))}
    </select>
  );
};

SelectCurrency.propTypes = {
  currencies: PropTypes.array.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  setSelectedCurrency: PropTypes.func.isRequired
};

export default SelectCurrency;