import { useTheme } from '../../ui/Theme/useTheme'
import styles from './Slider.module.scss'

const Slider = () => {
  const { theme, toggleTheme } = useTheme();

  return (
      <div className='flex justify-between mt-5'>
        <span className='text-[var(--accent-text-color)] text-xl'>Включить темную тему</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            id='check'
          />
            <span className={styles.span}></span>
          </label>
		</div>
  );
};

export default Slider;