import React, { useState, useEffect } from "react";
import './App.css';
import {db} from "./firebase_Config";
import firebase from "firebase";
import ContactsListItem from "./ContactsList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [nameInput , setnameInput] = useState(" ");
  const [emailInput , setemailInput] = useState(" ");
  
  function addcontact(e) {
    e.preventDefault();
    if (nameInput === "" || emailInput === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    db
    .collection("contacts")
    .add({
      name:nameInput,
      email:emailInput,
    })
    setnameInput("");
    setemailInput("");
  }
 
  useEffect(() => {
    getContacts();
  }, [])  //blank to run only on first launch

  function getContacts() {
    db
    .collection("contactcs")
    .onSnapshot(function (querySnapshot) {
      setContacts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
        }))
      );
    });
  }

  return (
    <div className="ui container" >

      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Contact Manager 🔥</h2>
        </div>
      </div>
      <p></p>

      {/* add contacts to firebase*/}
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={nameInput}
              onChange={(e) => {
                setnameInput(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => {
                setemailInput(e.target.value);
              }}
            />
          </div>
          <button type = "submit" className="ui button blue" onClick = {addcontact}>Add!</button>
        </form>
      </div>

      {/* fetch the data and show on screen */}
      <div>
        {contacts.map((contact) => (
          // in contactsList.js , we define a function and we pass these 3 arguments
          <ContactsListItem
            name={contact.name}
            email={contact.email}
            id={contact.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
