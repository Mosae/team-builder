import React, { useState } from 'react';

function Form() {
	const onFormSubmit = event => {
		event.preventDefault();
	};
	return (
		<form onSubmit={onFormSubmit}>
			<label>
				Name
				<input name="fname" type="text" />
			</label>

			<label>
				Last Name
				<input name="lname" type="text" />
			</label>
			<label>
				Specialty
				<input name="specialty" type="text" />
			</label>
			<br />
			<input type="submit" />
		</form>
	);
}
export default Form;
