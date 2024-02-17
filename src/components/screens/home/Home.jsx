import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'
import { useTheme } from '../../ui/Theme/useTheme'
import CurrencyConverter from '../../ui/currency-converter/CurrencyConverter'

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Header/>
        <CurrencyConverter/>
      <Footer/>
    </div> 
  );
};

export default Home;