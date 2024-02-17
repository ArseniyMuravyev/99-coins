import ShareButton from '../../buttons/ShareButton'
import Profile from '../../profile/Profile'

const Header = () => {
	return (
		<div className='flex justify-between items-center mb-5'>
			<Profile/>
			<ShareButton/>
		</div>
	)
}

export default Header