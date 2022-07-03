import { useState } from "react";
import styles from "./AddNewUser.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

function AddNewUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addNewUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.toString().trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please input a valid name and age",
      });

      return;
    }

    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please input a valid age (greater than 0)",
      });

      return;
    }

    const newUserInfo = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    };

    props.onSaveNewUser(newUserInfo);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const addUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const addAgeHandler = (event) => {
    setEnteredAge(Number(event.target.value));
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
          <input
            onChange={addUsernameHandler}
            id="username"
            type="text"
            value={enteredUsername}
          ></input>

          <label htmlFor="age">Age</label>
          <input
            onChange={addAgeHandler}
            id="age"
            type="number"
            value={enteredAge}
          ></input>

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddNewUser;
