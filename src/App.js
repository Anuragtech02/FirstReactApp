import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  const [users, setUsers] = useState([
    { name: "Anurag 1", message: "Hi I am Anurag 1", likes: 2200 },
    { name: "Anurag 2", message: "Hello I am Anurag 2", likes: 1200 },
    { name: "Anurag 3", message: "Hi I am Anurag 3", likes: 3210 },
  ]);

  return (
    <div className="app">
      {/* <Tweet
        name="Anurag 1"
        message="Loves Music and Technology"
        likes={2000}
      />
      <Tweet name="Anurag 2" message="Loves only music" likes={900} />
      <Tweet name="Anurag 3" message="Loves only technology" likes={1100} />
      <Tweet name="Anurag 4" message="Likes nothing" likes={100} /> */}
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}
export default App;
