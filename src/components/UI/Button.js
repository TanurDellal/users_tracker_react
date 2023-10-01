import styles from './Button.module.css';

const Button = ({id, buttonText}) => {
	return <button id={id} className={styles['button']}>{buttonText}</button>;
};

export default Button;
