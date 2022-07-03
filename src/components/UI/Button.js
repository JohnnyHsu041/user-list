import styles from "./Button.module.css";

function Button(props) {
  return (
    <button className={styles.button} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
