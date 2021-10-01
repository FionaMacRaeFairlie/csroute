import React from 'react'
import { Link, Route, useRouteMatch } from "react-router-dom";
import Navbar from './Navbar'
import Friend from './Friend'



const FriendList = ({match,friends}) => {
    const linkStyle={
        padding: "1%",
        margin: "1%",
        color:"blue"
        } 
    const { url } = useRouteMatch();
    const people= friends;
     console.log( {friends});
    const renderFriends=() => {
        return friends.map(friend => {
          
          return <> <Link style={linkStyle} key={friend.id} to={`${url}/${friend.id}`}>
            {friend.name}
          </Link>

          </>
        })
      };
    return (
      <div>
          <Navbar />
          {renderFriends()}
      <Route
        path={`${url}/:friendId`}>
        <Friend name={people} />

        </Route> 
      </div>
    )
 }          

export default FriendList;

