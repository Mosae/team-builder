import React, { useState } from 'react';

// const listOfDoctors = [
// 	{ fname: 'Nancy', lname: 'Jones', specialty: 'Surgeon' },
// 	{ fname: 'Kelly', lname: 'Clarke', specialty: 'OBGYN' }
// ];
function Form(props) {
	// const [doctor, setDoctor] = useState(listOfDoctors);
	const [formValues, setFormValues] = useState({
		fname: '',
		lanme: '',
		specialty: ''
	});

	const onInputChange = event => {
		const changedInput = event.target.name;
		const newChangedValue = event.target.value;
		console.log(newChangedValue);

		setFormValues({
			...formValues,
			[changedInput]: newChangedValue
		});
	};
	const onFormSubmit = event => {
		event.preventDefault();
		console.log('passed down props', props);

		const newDoctor = {
			fname: formValues.fname,
			lname: formValues.lname,
			specialty: formValues.specialty
		};

		props.setDoctor([...props.doctor, newDoctor]);
	};

	return (
		<div>
			<form onSubmit={onFormSubmit}>
				<label>
					Name
					<input
						name="fname"
						type="text"
						onChange={onInputChange}
						value={formValues.fname}
					/>
				</label>

				<label>
					Last Name
					<input
						name="lname"
						type="text"
						onChange={onInputChange}
						value={formValues.lname}
					/>
				</label>
				<label>
					Specialty
					<input
						name="specialty"
						type="text"
						onChange={onInputChange}
						values={formValues.specialty}
					/>
				</label>
				<br />
				<input type="submit" />
			</form>
			{/* <h1>Medical Team</h1>
			{doctor.map(dr => (
				<div>
					Dr. {dr.fname} {dr.lname} - {dr.specialty}
				</div>
			))} */}
		</div>
	);
}
export default Form;
