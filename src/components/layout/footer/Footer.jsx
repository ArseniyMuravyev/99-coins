import { Settings, TrendingUp, Wallet2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className='w-full fixed bottom-0 left-0 h-12'>
			<div className='flex items-center justify-around gap-6'>
				<Link className={styles.button} to='/wallet'>
					<Wallet2 size={24} strokeWidth={2} />
				</Link>
				<Link className={styles.button} to='/'>
					<TrendingUp size={24} strokeWidth={2} />
				</Link>
				<Link className={styles.button} to='/settings'>
					<Settings size={24} strokeWidth={2} />
				</Link>
			</div>
		</div>
	)
}

export default Footer
