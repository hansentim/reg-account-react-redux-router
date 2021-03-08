import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addUser from "../actions/addUser";
import { useHistory } from "react-router-dom";

function Registration() {
  //state för data till input
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addUser(userInfo));
    history.push("/account");
  }

  const handleFormChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  return (
    <section className="form-wrapper">
      <form className="reg-form">
        <h2>Registrera dig för ett konto</h2>
        <label className="label" htmlFor="Name">
          NAME
        </label>
        <input type="text" name="Name" id="name" onChange={handleFormChange} />

        <label className="label" htmlFor="Email">
          EMAIL
        </label>
        <input
          type="text"
          name="Email"
          id="email"
          onChange={handleFormChange}
        />

        <label className="label" htmlFor="PASSWORD">
          PASSWORD
        </label>
        <input
          type="password"
          name="Password"
          id="password"
          onChange={handleFormChange}
        />

        <button className="btn" type="button" onClick={handleClick}>
          Registrera mig!
        </button>
      </form>
    </section>
  );
}

export default Registration;
