import PropTypes from 'prop-types'

const AmountInput = ({ value, setValue, onClick }) => {
	return (
		<input
			type='text'
			pattern='[0-9]*'
			inputMode='numeric'
			value={value}
			onClick={onClick}
			onChange={e => {
				if (e.target.value.length >= 0 && e.target.value.length < 7) {
					setValue(e.target.value)
				}
			}}
			className='bg-[#f6ddff] text-center w-1/2 rounded-md border-2 border-transparent py-2 px-6 text-black focus:outline-none transition-colors duration-500 ease-in-out focus-visible:border-2 hover:border-[#e4a2fc] focus:border-[#e4a2fc]'
		/>
	)
}

AmountInput.propTypes = {
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	setValue: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default AmountInput
