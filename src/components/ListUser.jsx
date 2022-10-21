import React, { useState } from "react";
import User from "./User";

const ListUser = ({ users }) => {
  
  const [activeId, setActiveId] = useState(0);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} active={activeId} handleChangeActive={() => setActiveId(user.id)}/>
      ))}
    </div>
  );
};

export default ListUser;
