import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'
import { useTheme } from '../../ui/Theme/useTheme'
import Slider from '../../ui/slider/Slider'

const Settings = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={`App ${theme}`}>
			<Header/>
				<h1 className='text-3xl text-center font-bold text-[var(--accent-text-color)]'>Настройки</h1>
				<Slider onChange={toggleTheme}/>
			<Footer/>
		</div>
	)
}

export default Settings