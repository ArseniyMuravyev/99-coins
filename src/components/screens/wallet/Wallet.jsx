import { Sticker } from 'lucide-react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'
import { useTheme } from '../../ui/Theme/useTheme'

const Wallet = () => {
	const { theme } = useTheme();

	return (
		<div className={`App ${theme}`}>
			<Header/>
			<h1 className='text-[var(--accent-text-color)] text-xl'><Sticker size={48} strokeWidth={1} />Сорянчик, но функция пока недоступна. Мы ведем активную разработку, и в скором времени вы сможете воспользоваться ей!</h1>
			<Footer/>
		</div>
	)
}

export default Wallet