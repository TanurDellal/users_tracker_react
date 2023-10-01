import UserEntry from './UserEntry';
import Card from '../../UI/Card';

const UserList = ({ userList }) => {
	return (
		<Card>
			{userList.map(user => (
				<UserEntry
					key={userList.indexOf(user)+1}
					position={userList.indexOf(user)+1}
					name={user.enteredName}
					age={user.enteredAge}
				/>
			))}
		</Card>
	);
};

export default UserList;
