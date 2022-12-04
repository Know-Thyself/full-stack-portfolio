import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((error) => console.error(error));
	}, []);

  return (
		<div className='home'>
				{data && <p> {data.message} </p>}
		</div>
	);
}

export default Home;