import React, { useState } from 'react';

function Form() {
	const [formValues, setFormValues] = useState({
		fname: '',
		lanme: '',
		specialty: ''
	});
	const onFormSubmit = event => {
		event.preventDefault();

		const newDoctor = {
			fname: formValues.fname,
			lname: formValues.lname,
			specialty: formValues.specialty
		};

		setDoctor({ ...doctor, newDoctor });
	};

	const onInputChange = event => {
		const changedInput = event.target.name;
		const newChangedValue = event.target.value;
		console.log(newChangedValue);

		setFormValues({
			...formValues,
			[changedInput]: newChangedValue
		});
	};

	return (
		<form onSubmit={onFormSubmit}>
			<label>
				Name
				<input name="fname" type="text" onChange={onInputChange} />
			</label>

			<label>
				Last Name
				<input name="lname" type="text" onChange={onInputChange} />
			</label>
			<label>
				Specialty
				<input name="specialty" type="text" onChange={onInputChange} />
			</label>
			<br />
			<input type="submit" />
		</form>
	);
}
export default Form;
