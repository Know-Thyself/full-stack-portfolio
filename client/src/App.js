import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Router from './Router';
import Header from './components/Header';
import './App.css';

function App() {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage(
		'theme',
		defaultDark ? 'dark' : 'light'
	);

	return (
		<BrowserRouter>
			<div className='App' data-theme={theme}>
				<Header theme={theme} setTheme={setTheme} />
				<Router theme={theme} setTheme={setTheme} />
			</div>
		</BrowserRouter>
	);
}

export default App;
