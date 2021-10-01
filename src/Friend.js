
  import React from "react";
  import { useParams } from "react-router-dom";
  
  const Friend = ({ name }) => {
    const { friendId } = useParams();
    console.log(friendId);
    console.log(name);
    const person = name.find(p => p.id === Number(friendId));
    console.log(person.name);
    let friendInfo;
  
    if (person) {
      friendInfo = (
        <div>
          <h3> {person.name} </h3>
          <p>{person.id}</p>
          <hr />
        </div>
      );
    } else {
      friendInfo = <h2> Sorry. This doesn't exist </h2>;
    }
  
    return (
      <div>
        <div>{friendInfo}</div>
      </div>
    );
  };
  
  export default Friend;