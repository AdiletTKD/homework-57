import React from "react";
import { IUser } from "../../types";
import Users from "./Users";

interface Props {
    users: IUser[];
}

const User: React.FC<Props> = ({users}) => {
  return (
    <>
      <h4>Users</h4>
      {users.map((item: IUser) => (
        <Users key={item.id} user={item} />
      ))}
    </>
  );
};


export default User;