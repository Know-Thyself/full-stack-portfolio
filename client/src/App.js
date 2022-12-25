import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Router from './Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
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
				<Router />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
