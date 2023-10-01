import styles from './UserEntry.module.css';

const UserEntry = ({position, name, age}) => {
	return (
		<div className={styles['user-container']}>
			{/* <p><span>#</span>{position}</p>
			<p><span>Name:</span> {name}</p>
			<p><span>Age:</span> {age}</p> */}
			<p><span>#</span> {position}</p>
			<p><span>{name}</span> ({age} Years Old)</p>
		</div>
	);
};

export default UserEntry;
