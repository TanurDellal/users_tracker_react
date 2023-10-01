import React, { useState } from "react";

import "./App.css";

import AddUser from "./components/Users/AddUsers/AddUser";
import UserList from "./components/Users/DisplayUsers/UserList";
import ErrorPopup from "./components/ErrorMessage/ErrorPopup";

function App() {
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputNameError, setInputNameError] = useState('');
  const [userList, setUserList] = useState([]);

  const inputIsValid = ({ enteredName: name, enteredAge: age }) => {
    if (name.length === 0) {
      setErrorMessage("cannot be blank.");
      setInputNameError('Name');
    }
    else if (!name.match(/^[A-Za-z]+$/)) {
      setErrorMessage("must be alphabetical only.");
      setInputNameError('Name');
    }
    else if (!name.charAt(0).match(/[A-Z]/)) {
      setErrorMessage("must have capital initial.");
      setInputNameError('Name');
    }
    else if (age.length === 0) {
      setErrorMessage("cannot be blank.");
      setInputNameError('Age');
    }
    else if (!age.match(/^\d+$/)) {
      setErrorMessage("must only include digits 0-9.");
      setInputNameError('Age');
    }
    else {
      return true;
    }
    setErrorPopup(true);
    return false;
  };

  const addUserHandler = (userInput, clearForm) => {
    if (inputIsValid(userInput)) {
      setUserList(prevUsers => {
        const newUserList = [...prevUsers];
        const newUser = {...userInput, id: Math.random().toString()}
        newUserList.unshift(newUser)
        return newUserList;
      });
      clearForm();
    }
  };

  const dismissErrorHandler = (id) => {
    if (id === 'popup-background' || id === 'dismiss-button') {
      setErrorPopup(false);
      setInputNameError('');
      setErrorMessage('');
    }
  };

  return (
    <div className='page-content'>
      {errorPopup && (
        <ErrorPopup
          onClick={(event) => dismissErrorHandler(event.target.id)}
          inputName={inputNameError}
          errorMessage={errorMessage}
        />
      )}
      <AddUser onSubmit={addUserHandler} />
      {userList.length !== 0 ? <UserList userList={userList}/>
      : <p style={{'text-align': 'center', 'font-weight': 'bold'}}>Add your first user.</p>}
    </div>
  );
}

export default App;
