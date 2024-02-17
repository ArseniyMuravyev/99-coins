import React from 'react'

interface ConvertButtonProps {
	onClick: () => void
	text: string
}

const ConvertButton: React.FC<ConvertButtonProps> = ({
	onClick,
	text
}) => {
	return (
		<button
			className='w-1/2 rounded-md border-2 border-transparent py-2 px-6 text-black bg-[#ffe8ab] focus:outline-none transition-colors duration-500 ease-in-out focus-visible:border-2 hover:border-[#fcd260]'
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default ConvertButton;