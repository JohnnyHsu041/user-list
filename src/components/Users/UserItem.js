import styles from "./UserItem.module.css";

function User(props) {
  return (
    <div className={styles.user}>
      <p>
        {props.name} {props.age}
      </p>
    </div>
  );
}

export default User;
