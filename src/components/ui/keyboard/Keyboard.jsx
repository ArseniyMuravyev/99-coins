import { Delete, X } from 'lucide-react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './Keyboard.module.scss'

const Keyboard = ({ inputValue, setInputValue, onClose, keyboardRef }) => {
	const [isVisible, setIsVisible] = useState(false)

	const handleKeyClick = value => {
		if (value === 'backspace') {
			if (inputValue.length > 0) {
				setInputValue(prevInput => prevInput.slice(0, -1))
			}
		} else if (inputValue.length < 6) {
			setInputValue(prevInput => prevInput + value)
		} else if (inputValue == 0) {
			setInputValue(value)
		}
	}

	const handleClose = () => {
		setIsVisible(false)
		onClose()
	}

	return (
		<div className={styles.keyboard} ref={keyboardRef}>
			<div className={styles.keyboard_row}>
				<button className={styles.key} onClick={() => handleKeyClick('1')}>
					1
				</button>
				<button className={styles.key} onClick={() => handleKeyClick('2')}>
					2
				</button>
				<button className={styles.key} onClick={() => handleKeyClick('3')}>
					3
				</button>
			</div>
			<div className={styles.keyboard_row}>
				<button className={styles.key} onClick={() => handleKeyClick('4')}>
					4
				</button>
				<button className={styles.key} onClick={() => handleKeyClick('5')}>
					5
				</button>
				<button className={styles.key} onClick={() => handleKeyClick('6')}>
					6
				</button>
			</div>
			<div className={styles.keyboard_row}>
				<button className={styles.key} onClick={() => handleKeyClick('7')}>
					7
				</button>
				<button className={styles.key} onClick={() => handleKeyClick('8')}>
					8
				</button>
				<button className={styles.key} onClick={() => handleKeyClick('9')}>
					9
				</button>
			</div>
			<div className={styles.keyboard_row}>
				<button className={styles.key} onClick={handleClose}>
					<X />
				</button>
				<button className={styles.key} onClick={() => handleKeyClick('0')}>
					0
				</button>
				<button
					className={styles.key}
					onClick={() => handleKeyClick('backspace')}
				>
					<Delete />
				</button>
			</div>
		</div>
	)
}

Keyboard.propTypes = {
	onClose: PropTypes.func.isRequired,
	setInputValue: PropTypes.any.isRequired,
	inputValue: PropTypes.any.isRequired,
	keyboardRef: PropTypes.any.isRequired,
}

export default Keyboard
