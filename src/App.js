import React, {useState} from "react";

import AddNewUser from "./components/Users/AddNewUser";
import Users from "./components/Users/Users";

const INITIAL_USERS = [
  {id: "user1",name: 'Johnny', age: 25},
  {id: "user2", name: 'Alex', age: 30},
];

function App() {
  const [enteredUser, setEnteredUser] = useState(INITIAL_USERS);

  const saveNewUserHandler = (newUser) => {
    setEnteredUser(newUser);
  }

  return (
    <div>
      <AddNewUser onSaveNewUser={saveNewUserHandler}/>
      <Users dataPoints={}/>
    </div>
  );
}

export default App;
