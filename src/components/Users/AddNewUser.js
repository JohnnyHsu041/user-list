import { useState } from "react";
import styles from "./AddNewUser.module.css";
import Card from "../UI/Card";

function AddNewUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addNewUserHandler = (event) => {
    event.preventDefault();

    const id = Math.random().toString();
    const newUserInfo = {
      id,
      name: enteredUsername,
      age: enteredAge,
    };

    props.onSaveNewUser(newUserInfo);

    // two-way binding
    setEnteredUsername("");
    setEnteredAge("");
  };

  const addUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const addAgeHandler = (event) => {
    setEnteredAge(Number(event.target.value));
  };

  return (
    <Card>
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

        <button type="submit">Add user</button>
      </form>
    </Card>
  );
}

export default AddNewUser;
