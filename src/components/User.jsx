import axios from "axios";
import React, { useEffect, useState } from "react";

const User = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (props.active === props.user.id) {
      const getData = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${props.user.id}`
        );
        return res.data;
      };

      getData().then((posts) => setPosts(posts));
    }
  }, [props.active]);

  return (
    <div className="child" >
      <h3>
        nom: {props.user.name} {props.user.username}
      </h3>
      <p>email:{props.user.email}</p>
      <p>
        ville:{props.user.address.city}
        rue:{props.user.address.street}
      </p>
      <button onClick={props.handleChangeActive}>details posts</button>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
