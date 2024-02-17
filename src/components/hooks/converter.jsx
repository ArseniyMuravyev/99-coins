import axios from 'axios'
import { Frown, Smile } from 'lucide-react'
import { useEffect, useState } from 'react'

export const useConverter = () => {
	const [currencies, setCurrencies] = useState([])
	const [fromCurrency, setFromCurrency] = useState('')
	const [toCurrency, setToCurrency] = useState('')
	const [amount, setAmount] = useState(0)
	const [convertedAmount, setConvertedAmount] = useState(0)
	const [inputText, setInputText] = useState('Convert')
	const [emoji, setEmoji] = useState('')
	const [currencyText, setCurrencyText] = useState(`Let's convert!`)
	const [errorMessage, setErrorMessage] = useState('')
	const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
	const API_KEY = '890599aeaa6bba586bb87bbb2c67aa3f'

	const handleInputClick = () => {
		setIsKeyboardVisible(true)
	}

	const handleKeyboardClose = () => {
		setIsKeyboardVisible(false)
	}

	const changeInputText = () => {
		navigator.clipboard
			.writeText(inputText)
			.then(() => {
				setInputText('Converted!')
				setTimeout(() => {
					setInputText('Convert')
				}, 2000)
			})
			.catch(error => {
				console.error('Error: ', error)
			})
	}

	useEffect(() => {
		axios
			.get(`http://api.currencylayer.com/list?access_key=${API_KEY}`)
			.then(response => {
				if (response && response.data && response.data.currencies) {
					setCurrencies(Object.keys(response.data.currencies))
					setFromCurrency(Object.keys(response.data.currencies)[0])
					setToCurrency(Object.keys(response.data.currencies)[1])
				}
			})
			.catch(error => {
				console.log('Error fetching currency list', error)
			})
	}, [API_KEY])

	const toggleEmoji = () => {
		setEmoji(<Frown className='inline-block mb-1' size={28} />)
	}

	const convertCurrency = () => {
		if (parseFloat(amount) === 0) {
			setErrorMessage('Введите число больше 0')
			toggleEmoji()
			return
		}

		if (amount.trim() === '') {
			setErrorMessage('Введите число')
			toggleEmoji()
			return
		}

		setErrorMessage('')

		axios
			.get(
				`http://api.currencylayer.com/convert?access_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
			)
			.then(response => {
				setConvertedAmount(response.data.result)
				setCurrencyText(`${fromCurrency} to ${toCurrency}`)
				setEmoji(<Smile className='inline-block mb-1' size={28} />)
			})
			.catch(error => {
				console.log('Error converting currency', error)
			})
	}

	return {
		amount,
		setAmount,
		currencies,
		fromCurrency,
		toCurrency,
		handleInputClick,
		handleKeyboardClose,
		convertCurrency,
		changeInputText,
		inputText,
		emoji,
		convertedAmount,
		errorMessage,
		isKeyboardVisible,
		setIsKeyboardVisible,
		currencyText,
		setToCurrency,
		setFromCurrency
	}
}

export default useConverter
