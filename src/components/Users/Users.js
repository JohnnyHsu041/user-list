import styles from "./Users.module.css";
import Card from "../UI/Card";

function Users(props) {
  const isEmpty = props.data.length === 0;
  const users = props.data.map((user) => (
    <li key={user.id}>
      {user.name} ({user.age} years old)
    </li>
  ));

  return (
    <Card className={styles.users}>
      {isEmpty && <p>No data found</p>}
      {!isEmpty && <ul>{users}</ul>}
    </Card>
  );
}

export default Users;
