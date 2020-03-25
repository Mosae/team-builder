import React, { useState } from 'react';

function Form() {
	const [formValues, setFormValues] = useState({
		fname: '',
		lanme: '',
		specialty: ''
	});
	const onFormSubmit = event => {
		event.preventDefault();
	};

	const onInputChange = event => {
		const changedInput = event.target.name;
		const changedValue = event.target.value;
		console.log(changedValue);
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
