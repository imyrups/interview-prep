// Description:
// Create a React component that:
//         1. Fetches a list of users from https://api.github.com/users
//         2. Displays each user’s avatar and username in a list

// Requirements:
//         • Show a loading indicator while fetching
//         • Handle and display error if the request fails

// Bonus (Optional):
//         • Add a search input to filter users by login name


```jsx
import React, {useState, useEffect} from "react";

const useUserList = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([])

  // console.log("Hook", users);
  
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw Error("Something went wrong")
        }
        return res.json()
      })
      .then(data => {
        setUsers(data)
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false))
  }, [url])

  return {loading, error, users};
}

export default useUserList;
```
```jsx
import React, {useState} from "react";
import User from './user';
import useUserList from './useUserList';

const url = "https://api.github.com/users";

const UserList = () => {
  const {users, loading, error} = useUserList(url);
  if(loading) return <div>Loading Users....</div>
  if(error) return <div>Something went wrong</div>
  return <div>
    {users && users.map(user => <User key={user.login} user={user}></User>)}
  </div>
}

export default UserList;
```
```jsx
import React from "react";
const style = {
  display: "flex",
  alignItems:"center"
}
const User = React.memo(({user}) => {
  return <div style={style}>
    <img src={user.avatar_url} height="100px" width="100px"></img>
    <span>{user.login}</span>
  </div>
})

export default User;
```
```jsx
import React, { useRef, useState } from 'react'
import UserList from './userList';

const App = () => {
  return <UserList />
}


export default App
```
