import { useState } from "react";
import styles from "./AddNewUser.module.css";
import Card from "../UI/Card";

function AddNewUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addNewUserHandler = (event) => {
    event.preventDefault();

    const newUserInfo = [enteredUsername, enteredAge];
    console.log(newUserInfo);
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
        <input onChange={addUsernameHandler} id="username" type="text"></input>

        <label htmlFor="age">Age</label>
        <input onChange={addAgeHandler} id="age" type="number"></input>

        <button type="submit">Add user</button>
      </form>
    </Card>
  );
}

export default AddNewUser;
