import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
const Router = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch('/projects')
			.then((res) => res.json())
			.then((data) => {
				setProjects(data[0].content.portfolio.projects);
			})
			.catch((error) => console.error(error));
	}, []);
  return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/projects' element={<Projects projects={projects} />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;