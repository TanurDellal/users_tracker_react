import styles from './Card.module.css';

const Card = (props) => {
	return (
		<div className={`${styles['wrapper']} + ${props.classes}`}>
			{props.children}
		</div>
	);
};

export default Card;
