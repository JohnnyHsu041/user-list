import Card from "../UI/Card";
import User from "./UserItem";

function Users(props) {
  const users = [...props.data].map((user) => {
    return <User key={user.id} name={user.name} age={user.age} />;
  });

  return <Card>{users}</Card>;
}

export default Users;
