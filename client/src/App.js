import useLocalStorage from 'use-local-storage';
import Router from './Router';
import './App.css';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	);

  return (
		<div className='App' data-theme={theme}>
			<Router theme={theme} setTheme={setTheme} />
		</div>
	);
}

export default App;
