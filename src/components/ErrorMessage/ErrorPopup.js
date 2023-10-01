import styles from './ErrorPopup.module.css';

import Button from './../UI/Button';

const ErrorPopup = ({errorMessage, inputName, onClick}) => {
	return (
		<div id='popup-background' className={styles['error-message']} onClick={onClick}>
			<div id='popup-container' className={styles['container']} >
				<h2>Invalid {inputName}</h2>
				<p>{inputName} {errorMessage}</p>
				<Button id='dismiss-button' buttonText='Dismiss' />
			</div>
		</div>
	);
};

export default ErrorPopup;
