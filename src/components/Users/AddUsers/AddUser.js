import { useState } from 'react';

import styles from './AddUser.module.css';

import Button from './../../UI/Button';
import Card from './../../UI/Card';

const AddUser = ({onSubmit}) => {

	const [formInput, setFormInput] = useState({
		enteredName: '',
		enteredAge: ''
	});

	const inputChangeHandler = (target) => {
		if (target.id === 'Name') {
			setFormInput((prevInput => ({...prevInput, enteredName: target.value})));
		}
		else if (target.id === 'age') {
			setFormInput((prevInput => ({...prevInput, enteredAge: target.value})));
		}
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		onSubmit(formInput, clearForm);
	};

	const clearForm = () => {
		setFormInput({
			enteredName: '',
			enteredAge: ''
		});
	};

	return (
		<Card classes={styles['form']} >
			<form onSubmit={formSubmitHandler} >
				<legend>Register Details</legend>
				<div>
					<label htmlFor="Name">First Name</label>
					<input id="Name" value={formInput.enteredName} onChange={(event) => inputChangeHandler(event.target)}/>
				</div>
				<div>
					<label htmlFor="age">Age (Years)</label>
					<input id="age" value={formInput.enteredAge} onChange={(event) => inputChangeHandler(event.target)}/>
				</div>
				<div className={styles['button']}>
					<Button id='submit-button' buttonText='Submit' />
				</div>
			</form>
		</Card>
	);
};

export default AddUser;
