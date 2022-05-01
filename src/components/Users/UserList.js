import { useState } from 'react/cjs/react.development'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import styles from './UserList.module.css'

const UserList = (props) => {
	const [confirm, setConfirm] = useState(null)
	const [data, setData] = useState([])

	const windowModalHandler = (e) => {
		setData(props.users.filter((user) => user.id != e.target.id))
		setConfirm({
			title: 'Confirm the action',
			message: 'Do you really want to delete this?',
		})
	}

	const deleteUserInfoHandler = (e) => {
		if (e.target.type === 'button') {
			props.onGetData(data)
			setConfirm(null)
		}
	}

	const cancelHandler = (e) => {
		if (e.target.type === 'button') {
			setConfirm(null)
		}
	}

	return (
		<div>
			{confirm && (
				<ErrorModal
					title={confirm.title}
					message={confirm.message}
					onConfirm={deleteUserInfoHandler}
				>
					<Button onClick={cancelHandler}>Cancel</Button>
				</ErrorModal>
			)}
			<Card className={styles.users}>
				<ul>
					{props.users.map((user) => (
						<li key={user.id}>
							{user.name} ({user.age} years old)
							<Button onClick={windowModalHandler} id={user.id}>
								delete
							</Button>
						</li>
					))}
				</ul>
			</Card>
		</div>
	)
}

export default UserList
