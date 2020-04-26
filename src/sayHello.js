import React from "react";

function Hello() {
  const sayHello = () => {
    console.log("Hello Man :)");
  };

  return (
    <div>
      <button onClick={sayHello}>Print Hello</button>
    </div>
  );
}
export default Hello;
