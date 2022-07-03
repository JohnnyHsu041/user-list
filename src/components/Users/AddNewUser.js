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
        <label htmlFor="username">使用者名稱：</label>
        <input onChange={addUsernameHandler} id="username" type="text"></input>

        <label htmlFor="age">年齡：</label>
        <input onChange={addAgeHandler} id="age" type="number"></input>

        <button type="submit">新增使用者</button>
      </form>
    </Card>
  );
}

export default AddNewUser;
