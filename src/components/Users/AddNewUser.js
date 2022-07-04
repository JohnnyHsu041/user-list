import { useState, useRef } from "react";
import styles from "./AddNewUser.module.css";
import Wrapper from "../Helper/Wrapper";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

function AddNewUser(props) {
  const enteredUser = useRef();
  const enteredUserAge = useRef();

  const [error, setError] = useState();

  const addNewUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUser.current.value.trim().length === 0 ||
      enteredUserAge.current.value.toString().trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please input a valid name and age",
      });

      return;
    }

    if (+enteredUserAge.current.value < 0) {
      setError({
        title: "Invalid age",
        message: "Please input a valid age (greater than 0)",
      });

      return;
    }

    const newUserInfo = {
      id: Math.random().toString(),
      name: enteredUser.current.value,
      age: enteredUserAge.current.value,
    };

    props.onSaveNewUser(newUserInfo);

    enteredUser.current.value = "";
    enteredUserAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addNewUserHandler} className={styles["new-user-form"]}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredUser}></input>

          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={enteredUserAge}></input>

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddNewUser;
