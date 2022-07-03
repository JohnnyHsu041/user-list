import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  const clickHandler = () => {
    props.onCloseModal();
  };

  return (
    <div>
      <div onClick={clickHandler} className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <section className={styles.content}>
          <p>{props.message}</p>
        </section>
        <footer className={styles.actions}>
          <Button onClick={clickHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
