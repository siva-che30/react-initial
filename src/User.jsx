import React from "react";

function User({name,age}) {
  return (
    <>
      <h1> {name}</h1>;
      <h1> {age}</h1>;
      {/* <h1> {phone}</h1>; */}
    </>

  )
}

export default User;