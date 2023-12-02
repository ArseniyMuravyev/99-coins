import axios from 'axios'
import { Frown, Smile, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import ConvertButton from '../../buttons/ConvertButton'
import AmountInput from '../amount-input/AmountInput'
import Keyboard from '../keyboard/Keyboard'
import SelectCurrency from '../select-currency/SelectCurrency'

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [inputText, setInputText] = useState('Convert');
  const [emoji, setEmoji] = useState('');
  const [currencyText, setCurrencyText] = useState('Let\'s convert!');
  const [errorMessage, setErrorMessage] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const handleInputClick = () => {
    setIsKeyboardVisible(true);
  };

  const handleKeyboardClose = () => {
    setIsKeyboardVisible(false);
  };

  const changeInputText = () => {
    navigator.clipboard.writeText(inputText)
      .then(() => {
        setInputText('Converted!');
        setTimeout(() => {
          setInputText('Convert');
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying URL: ', error);
      });
  };
  const API_KEY = '3431f426b3960b51421ac7d77efff598';

  useEffect(() => {
    axios.get(`http://api.currencylayer.com/list?access_key=${API_KEY}`)
      .then(response => {
        setCurrencies(Object.keys(response.data.currencies));
        setFromCurrency(Object.keys(response.data.currencies)[0]);
        setToCurrency(Object.keys(response.data.currencies)[1]);
      })
      .catch(error => {
        console.log('Error fetching currency list', error);
      });
  }, [API_KEY]);

  const toggleEmoji = () => {
    setEmoji(<Frown className='inline-block mb-1' size={28}/>);
  };

  const convertCurrency = () => {
    if (parseFloat(amount) === 0) {
      setErrorMessage('Введите число больше 0');
      toggleEmoji();
      return;
    }

    if (amount.trim() === '') {
      setErrorMessage('Введите число'); 
      toggleEmoji();
      return;
    }

    setErrorMessage('');


  axios.get(`http://api.currencylayer.com/convert?access_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
    .then(response => {
      setConvertedAmount(response.data.result);
      setCurrencyText(`${fromCurrency} to ${toCurrency}`);
      setEmoji(<Smile className='inline-block mb-1' size={28} />);
    })
    .catch(error => {
      console.log('Error converting currency', error);
    });
};

  return (
		<>
			<div className='flex justify-between gap-5'>
				<SelectCurrency
					currencies={currencies}
					selectedCurrency={fromCurrency}
					setSelectedCurrency={setFromCurrency}
				/>
				<AmountInput
					value={amount}
					setValue={setAmount}
					onClick={handleInputClick}
				/>
				{isKeyboardVisible && (
					<Keyboard
						inputValue={amount}
						setInputValue={value => {
							if (value.length < 7 || value == '0') {
								setAmount(value)
							}
						}}
						onClose={handleKeyboardClose}
					/>
				)}
			</div>
			<div className='flex justify-between gap-5 mt-5'>
				<SelectCurrency
					currencies={currencies}
					selectedCurrency={toCurrency}
					setSelectedCurrency={setToCurrency}
				/>
				<ConvertButton
					onClick={() => {
						changeInputText()
						convertCurrency()
					}}
					text={inputText}
				/>
			</div>
			<div className='text-black rounded-md mt-5 px-3 py-5 flex flex-col gap-6 bg-[#ddfffd] h-32'>
				<h3 className='flex justify-between text-xl'>
					<span className='flex gap-2'>
						{currencyText} {emoji}
					</span>
					<TrendingUp size={24} strokeWidth={2} />
				</h3>
				<div className='flex items-center justify-between'>
					{!errorMessage && (
						<p className='text-3xl font-bold'>
							{convertedAmount}
							<span className='text-base font-bold'>&nbsp;{toCurrency}</span>
						</p>
					)}
					{errorMessage && (
						<p className='text-red-500 text-xl font-bold'>{errorMessage}</p>
					)}
				</div>
			</div>
		</>
	)
};

export default CurrencyConverter;