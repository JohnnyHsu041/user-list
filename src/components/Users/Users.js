import styles from "./Users.module.css";
import Card from "../UI/Card";

function Users(props) {
  const users = props.data.map((user) => {
    return (
      <li>
        {user.name} {user.age} years old
      </li>
    );
  });

  return (
    <Card className={styles.users}>
      <ul>{users}</ul>
    </Card>
  );
}

export default Users;
