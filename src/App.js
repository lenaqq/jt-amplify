import logo from './logo.svg';

import React, { useState, useEffect } from "react";

import './App.css';
import './biukop.css';


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
    await API.graphql(graphqlOperation(createSuburb, { input: { name: suburb, postcode: "2022", state: "NSW"}}));
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
      {/*<header className="App-header">
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
      </header>*/}
      
      <div className="sign-out">
         <AmplifySignOut />
       </div>
       <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-container-style u-group u-group-1">
          <div class="u-container-layout u-valign-middle u-container-layout-1">
            <h2 class="u-align-center u-text u-text-1">Send a paccel</h2>
            <p class="u-align-center u-text u-text-2">Your job is important to us, so we want to make sure that your delivery is fast and accurate. Please fillup the following information</p>
          </div>
        </div>
        <div class="u-form u-form-1">
          <form action="#" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form-1" > {/* style="padding: 10px;" */}
            <div class="u-form-group u-form-name">
              <label for="name-620d" class="u-label">From</label>
              <input type="text" placeholder="Enter Sender's Name" id="name-620d" name="name" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
            </div>
            <div class="u-form-date u-form-group">
              <label for="email-620d" class="u-label">Pickup After</label>
              <input type="date" placeholder="dd/mm/yyyy Pickup Date" id="email-620d" name="email" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="required"/>
            </div>
            <div class="u-form-group u-form-textarea u-form-group-3">
              <label for="textarea-9ee4" class="u-label">From Address</label>
              <textarea rows="4" cols="50" id="textarea-9ee4" name="textarea" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="" placeholder="Enter Sender's Address / Return Address (if undelivered)"></textarea>
            </div>
            <div class="u-align-center u-form-group u-form-submit">
              {/*
              <a href="#" class="u-border-none u-btn u-btn-submit u-button-style u-none u-text-body-alt-color u-btn-1">
                <br/>
              </a>
              */}
              <input type="submit" value="submit" class="u-form-control-hidden"/>
            </div>
            <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
            <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
            <input type="hidden" value="" name="recaptchaResponse"/>
          </form>
        </div>
        <p class="u-text u-text-default u-text-3">Please input Receiver's information below</p>
        <div class="u-form u-form-2">
          <form action="#" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form"> {/* style="padding: 10px" */}
            <div class="u-form-email u-form-group u-form-group-5">
              <label for="email-f2a8" class="u-label u-text-grey-40">Send To</label>
              <input type="email" placeholder="Enter Receipient Name" id="email-f2a8" name="email" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
            </div>
            <div class="u-form-group u-form-name u-form-group-6">
              <label for="name-f2a8" class="u-label u-text-grey-40">Email</label>
              <input type="text" placeholder="Enter email to receive notifications" id="name-f2a8" name="name" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-group-7">
              <label for="text-8f19" class="u-label u-text-grey-40">Length (mm)</label>
              <input type="text" placeholder="e.g. 100" id="text-8f19" name="text" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"/>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-group-8">
              <label for="text-fdcd" class="u-label u-text-grey-40">Width (mm)</label>
              <input type="text" placeholder="100" id="text-fdcd" name="text-3" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"/>
            </div>
            <div class="u-form-group u-form-partition-factor-3 u-form-group-9">
              <label for="text-901c" class="u-label u-text-grey-40">Height (mm)</label>
              <input type="text" placeholder="100" id="text-901c" name="text-2" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"/>
            </div>
            <div class="u-form-group u-form-group-10">
              <label for="text-7104" class="u-label u-text-grey-40">Weight (kg)</label>
              <input type="text" placeholder="e.g. 1.2Kg" id="text-7104" name="text-1" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"/>
            </div>
            <div class="u-form-group u-form-phone u-form-group-11">
              <label for="phone-447e" class="u-label u-text-grey-40">Phone</label>
              <input type="tel" pattern="\+?\d{0,2}[\s\(\-]?([0-9]{3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Enter your phone (e.g. 0412 345 678" id="phone-447e" name="phone" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""/>
            </div>
            <div class="u-form-group u-form-message u-form-group-12">
              <label for="message-f2a8" class="u-label u-text-grey-40">Address</label>
              <textarea placeholder="123  some avenue" rows="4" cols="50" id="message-f2a8" name="message" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required=""></textarea>
            </div>
            <div class="u-align-center u-form-group u-form-submit u-form-group-13">
              {/*
              <a href="#" class="u-border-1 u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-btn-submit u-button-style u-none u-text-palette-1-base u-btn-2">&nbsp;<br/>
              </a>
              */}
              <input type="submit" value="submit" class="u-form-control-hidden"/>
            </div>
            <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
            <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
            <input type="hidden" value="" name="recaptchaResponse"/>
          </form>
        </div>
        <a href="Make-Payment.html" data-page-id="2440329844" class="u-btn u-button-style u-btn-3">Place Order</a>
      </div>

      {/*}
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
         */}
    </div>
  );
}

// export default App;
export default withAuthenticator(App);
