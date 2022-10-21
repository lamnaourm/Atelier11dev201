import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ListUser from "./components/ListUser";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    };

    getData().then((users) => setUsers(users));
  }, []);
  return (
    <div className="container">
      {users.length === 0 ? (
        "Pas d'utilisateurs"
      ) : (
        <ListUser users={users} />
      )}
    </div>
  );
}

export default App;
