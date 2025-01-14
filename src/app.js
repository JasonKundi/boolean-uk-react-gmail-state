import Header from "./components/header";
import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/app.css";

function App() {
  // Use initialEmails for state
  const [emailList, setEmailList] = useState(initialEmails);
  console.log(initialEmails);

  const toggleRead = (email) => {
    console.log(email)
    const updatedEmails = email.map((emailElement) => {
      if (emailElement === email) {
        const updatedEmail = {...email}
        updatedEmail.read = !updatedEmail.read
        return updatedEmail
      } else {
        return emailElement
      }
    })
    setEmailList(updatedEmails)

  }

  //- Create a `toggleRead` function that updates the target email's **read** 
  //property in state, when a user clicks on the checkbox

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emailList.map(function (email) {
          
          let emailClass = 'email '
          if (email.read) {
            emailClass += 'read'
          } else {
            emailClass += 'unread'
          }
          console.log(email);
          return (
            <li className={emailClass}>
              <div className="select">
                <input className="select-checkbox"
                checked = {email.read}
                onClick = {() => toggleRead(email)} 
                type="checkbox" />
              </div>
              <div className="star">
                <input className="star-checkbox" type="checkbox" checked = {email.starred} /> 
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          );
        })}
      </main>
    </div>
  );
}

//{
//  id: 1,
//  sender: `Zoom`,
//  title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
//  starred: false,
//  read: true
//},

export default App;
