import { useEffect, useRef } from 'react'
import ConvertButton from '../../buttons/ConvertButton.tsx'
import useConverter from '../../hooks/converter'
import AmountInput from '../amount-input/AmountInput'
import Keyboard from '../keyboard/Keyboard'
import SelectCurrency from '../select-currency/SelectCurrency'

const CurrencyConverter = () => {
	const {
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
		isKeyboardVisible,
		currencyText,
		errorMessage,
		setToCurrency,
		setFromCurrency,
		setIsKeyboardVisible
	} = useConverter()

	const keyboardRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = event => {
			if (keyboardRef.current && !keyboardRef.current.contains(event.target)) {
				if (isKeyboardVisible) {
					setIsKeyboardVisible(false)
				}
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isKeyboardVisible])

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
						setInputValue={setAmount}
						onClose={handleKeyboardClose}
						keyboardRef={keyboardRef}
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
			<div className='text-black rounded-md mt-5 flex flex-col gap-6 bg-[#ddfffd] h-36 items-center justify-center'>
				<h3 className='flex justify-between text-xl'>
					<span className='flex gap-2'>
						{currencyText} {emoji}
					</span>
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
}

export default CurrencyConverter
