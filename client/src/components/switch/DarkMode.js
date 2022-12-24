import React, { useState } from 'react';
import './DarkMode.css';

const DarkMode = ({ theme, setTheme }) => {
  const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		theme === 'light' ? setIsChecked(false) : setIsChecked(true);
		setIsChecked(!isChecked);
	};
	const [isChecked, setIsChecked] = useState(() =>
		theme === 'dark' ? true : false
	);

	return (
		<div className='theme-icons-and-radio-btn'>
			<div className='radio-switch'>
				<div className='light-dark-mode'>
					<input
						className='switch-checkbox'
						id='radio-button'
						name='dark-mode'
						value='dark-mode'
						type='checkbox'
						checked={isChecked}
						onChange={switchTheme}
					/>
					<label className='switch-label' htmlFor='radio-button'>
						<i className={theme === 'dark' ? 'fa-solid fa-moon' : 'd-none'} />
						<span className='switch-button' />
						<span className={theme === 'light' ? 'sun-icon' : 'd-none'}>
							☀️
						</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default DarkMode;
