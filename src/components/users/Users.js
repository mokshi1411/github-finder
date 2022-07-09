import React from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
const Users = ({ loading, users }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyles}>
        {users.map((user) => {
          return <UserItem user={user} />;
        })}
      </div>
    );
  }
};
Users.defaultProps = {
  loading: false,
  users: [],
};
const userStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Users;
