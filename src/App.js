import React, { useState, useEffect } from 'react';
import './App.css';
// import userlist from "./users.json";
import Userform from "./components/Userform";
import Axios from "axios";

function App() {
  let userlist = [];

  let initList = [];
  
  const [users, setUsers] = useState(userlist);
  const [initUsers, setInitUsers] = useState(initList);
  const [search, setSearch] = useState("");

  const userRequest = async function() {
    const queryUrl = "https://randomuser.me/api/?results=20";
    const response = await Axios.get(queryUrl);
    userlist = response.data.results.map((result) => {
      return {
        firstName: result.name.first,
        lastName: result.name.last
      }
    });
    setUsers(userlist);
    setInitUsers(userlist);
  }

  useEffect(() => {
    userRequest();  
  }, []);

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
        if (tempArray[j].lastName < tempArray[i].lastName) {
          console.log("swapping element " + i + " and element " + j);
          tempArray = swap(tempArray, i, j);
        }
      }
    }
    setUsers(tempArray);
    console.log(userlist);
  };

  const searchUsers = function() {
    console.log(search);
    setUsers(users.filter(userEl => userEl.lastName.includes(search)));
  }
  


  const userList = users.map((userObj) => 
    <Userform name={userObj.firstName + " " + userObj.lastName} />
  );

  const sortButton = <button type="button" className="btn btn-secondary mb-3" onClick={() => {sortUsers(users)}}>Sort users alphabetically</button>;

  const resetButton = <button type="button" className="btn btn-success mb-3" onClick={() => setUsers([...initUsers])}>Restore original users</button>;

  return (
    <div className="App">
      <h1 className="text-center">User Directory</h1>
      <div className="container my-3">
        <div className="row">
          <div className="col-3">
            {sortButton}
            {resetButton}
            <div className="input-group mb-3">
              <input type="text" className="form-control" value={search} onChange={({target}) => setSearch(target.value)}/>
              <div className="input-group-append">
                <button onClick={searchUsers} className="btn btn-outline-secondary" type="button" id="button-addon2">Search by last name</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            {userList}
          </div>
          <div className="col-3"/>
        </div>
      </div>
    </div>
  );

}

export default App;
