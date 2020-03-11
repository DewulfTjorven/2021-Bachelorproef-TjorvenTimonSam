import React from "react";
import User from "../User/User";

const UsersList = () => {
  return (
    <>
      <ul>
        {[].map(user => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
