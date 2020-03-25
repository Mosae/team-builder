import React, { useState } from 'react';
import './App.css';

const listOfDoctors = [
	{ fname: 'Nancy', lname: 'Jones' },
	{ fname: 'Kelly', lname: 'Clarke' }
];

function App() {
	const [doctor, setDoctor] = useState(listOfDoctors);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Medical Team</h1>
				{doctor.map(dr => (
					<div>
						Dr. {dr.fname} {dr.lname}
					</div>
				))}
			</header>
		</div>
	);
}

export default App;
