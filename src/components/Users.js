import React from "react";
import List from "./List.js";
import Details from "./Details.js";
import { useState } from "react";


export default function Users() {
  const [user, setUser] = useState({});

  return (
    <div className="users">
      <List onSelectUser={setUser} select={user.id} />
      {user.id ? <Details id={user.id} /> : null}
    </div>
  );
}