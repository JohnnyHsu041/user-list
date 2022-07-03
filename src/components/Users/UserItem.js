import styles from "./UserItem.module.css";

function User(props) {
  return (
    <div className={styles.user}>
      <p>
        {props.info.name} {props.info.age}
      </p>
    </div>
  );
}

export default User;
