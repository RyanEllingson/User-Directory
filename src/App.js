import React, { useState, useEffect } from 'react';
import './App.css';
import userlist from "./users.json";
import Userform from "./components/Userform";

function App() {
  const [users, setUsers] = useState(userlist);
  
  useEffect(() => {
    console.log(users);
  }, [users]);

  const swap = function(items, firstIndex, secondIndex) {
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
    return items;
  };

  const sortUsers = function(userArray) {
    console.log("button clicked!");
    let tempArray = [...userArray];
    for (let i=0; i<tempArray.length; i++) {
      for (let j=i; j<tempArray.length; j++) {
        if (tempArray[j].name < tempArray[i].name) {
          console.log("swapping element " + i + " and element " + j);
          tempArray = swap(tempArray, i, j);
        }
      }
    }
    console.log(tempArray);
    setUsers(tempArray);
  };

  const userList = users.map((userObj) => 
    <Userform handleClick={()=>{setUsers(users.filter(userEl => userEl.id === userObj.id))}} name={userObj.name} />
  );

  const sortButton = <button type="button" className="btn btn-secondary" onClick={() => {sortUsers(users)}}>Sort users alphabetically</button>;

  console.log("@#*$^@#*$&^@#*^$@#*&$^", users)
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {userList}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {sortButton}
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
