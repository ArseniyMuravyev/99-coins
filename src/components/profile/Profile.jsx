import { ChevronDown } from 'lucide-react'

const Profile = () => {
	return (
		<div className='flex items-center gap-2'>
			<img src='./images/profile.jpg' className='block rounded-full w-10 h-10 object-cover'/>
			<p className='text-[var(--accent-text-color)] text-lg'>mywallet<span className='opacity-60'>.fr.if</span></p>
			<button href='#' className='button w-7 h-7'><span className='button__text'><ChevronDown /></span></button>
		</div>
	)
}

export default Profile