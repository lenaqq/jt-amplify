import logo from './logo.svg';
import React, { useState, useEffect } from "react";

import './App.css';

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createSuburb, updateSuburb } from "./graphql/mutations";
import { listSuburbs } from "./graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  const [allSuburbs, setAllSuburbs] = useState(null);

  useEffect(() => {
    (async () => {
      const suburbs = await API.graphql(graphqlOperation(listSuburbs));
      setAllSuburbs(suburbs.data.listSuburbs.items);
    })();
  }, []);


  const [name, setSuburbName] = useState("");
 
  const changeSuburbName = (e) => {
    setSuburbName(e.target.value);
  };
  const submitAddSuburb = async (e) => {
    e.preventDefault();
    if (name === "") return alert("Input field cannot be empty");
    const suburb = { name, done: false };
    await API.graphql(graphqlOperation(createSuburb, { input: { name: suburb.name, postcode: "2022", state: "NSW"}}));
    allSuburbs === null ? setAllSuburbs([suburb]) : setAllSuburbs([suburb, ...allSuburbs]);
  };
 
  const toggleSuburb = async (id) => {
    const suburb = allSuburbs.find(({ id: _id }) => _id === id);
    let newSuburb = { id, name: suburb.name };
    newSuburb.done = suburb.done ? false : true;
    await API.graphql(graphqlOperation(updateSuburb, { input: newSuburb }));
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Test 1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <form className="add-todo-form" onSubmit={submitAddSuburb}>
      <input
        placeholder="Add Suburb"
        onChange={changeSuburbName}
      />
      <button type="submit">+</button>
     </form>

      {allSuburbs === null ? (
       <p>Loading Suburbs...</p>
     ) : allSuburbs.length === 0 ? (
       <p>No Suburb available</p>
     ) : (  
       <div className="todos">
         {allSuburbs.reverse().map(({ id, name, done },i) => (
           <div className="todo-block" key={i}>
             <input
               onClick={() => toggleSuburb(id)}
               type="checkbox"
               id={id}
               value={id}
               key={i}
               defaultChecked={done}
             />
             <label htmlFor={id}>{name}</label>
           </div>
        ))}
      </div>
    )}
    </div>
  );
}

export default App;
