import React, { useState } from 'react';

function Form() {
	return (
		<form>
			<label>
				Name
				<input name="fname" type="text" />
			</label>

			<label>
				Last Name
				<input name="lname" type="text" />
			</label>
			<br />
			<input type="submit" />
		</form>
	);
}
export default Form;
