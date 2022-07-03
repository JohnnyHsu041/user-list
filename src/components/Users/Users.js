import Card from "../UI/Card";
import User from "./UserItem";

function Users(props) {
  const usersData = [...props.dataPoints];

  return (
    <Card>
      <User info={usersData} />
      <User />
      <User />
    </Card>
  );
}

export default Users;
