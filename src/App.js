import React, { useState } from "react";

import AddNewUser from "./components/Users/AddNewUser";
import Users from "./components/Users/Users";

function App() {
  const [enteredUsers, setEnteredUsers] = useState([]);

  const saveNewUserHandler = (newUser) => {
    setEnteredUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  return (
    <React.Fragment>
      <AddNewUser onSaveNewUser={saveNewUserHandler} />
      <Users data={enteredUsers} />
    </React.Fragment>
  );
}

export default App;
