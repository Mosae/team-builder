import React, { useState } from 'react';

function Form(props) {
	const [doctor, setDoctor] = useState();
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
		console.log('passed down props', props.details);

		const newDoctor = {
			fname: formValues.fname,
			lname: formValues.lname,
			specialty: formValues.specialty
		};

		setDoctor([...props.details, newDoctor]);
	};

	return (
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
	);
}
export default Form;
