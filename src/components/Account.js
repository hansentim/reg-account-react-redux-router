import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import addUser from "../actions/addUser";

function Account() {
  const state = useSelector((state) => state);
  //state för att toogla med ternary och knappar
  const [changeAccount, setChangeAccount] = useState("true");
  //state för att skicka i input
  const [userInfo, setUserInfo] = useState({
    name: state.user.name,
    email: state.user.email,
    password: state.user.password,
  });

  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    setUserInfo({
      name: e.currentTarget.Name.value,
      email: e.currentTarget.Email.value,
      password: e.currentTarget.Password.value,
    });
  };

  function handleClick() {
    setChangeAccount("false");
  }

  function handleSaveBtnClick() {
    setChangeAccount("true");
    dispatch(addUser(userInfo));
  }

  //ternary operator för att toggla mellan ändra/spara
  return (
    <section className="account">
      {changeAccount === "true" ? (
        <form className="account-form">
          <h2>Ditt Konto</h2>
          <label className="label" htmlFor="Name">
            NAME
          </label>
          <input type="text" name="Name" value={state.user.name} readOnly />

          <label className="label" htmlFor="Email">
            EMAIL
          </label>
          <input type="text" name="Email" value={state.user.email} readOnly />

          <label className="label" htmlFor="PASSWORD">
            PASSWORD
          </label>
          <input
            type="password"
            name="Password"
            value={state.user.password}
            readOnly
          />

          <button className="btn" type="button" onClick={handleClick}>
            Ändra
          </button>
        </form>
      ) : (
        <section className="account-info">
          <form className="reg-form" onChange={handleFormChange}>
            <h2>Ditt Konto</h2>
            <label className="label" htmlFor="Name">
              NAME
            </label>
            <input
              type="text"
              name="Name"
              id="name"
              defaultValue={state.user.name}
            />

            <label className="label" htmlFor="Email">
              EMAIL
            </label>
            <input
              type="text"
              name="Email"
              id="email"
              defaultValue={state.user.email}
            />

            <label className="label" htmlFor="PASSWORD">
              PASSWORD
            </label>
            <input
              type="password"
              name="Password"
              id="password"
              defaultValue={state.user.password}
            />

            <button className="btn" type="button" onClick={handleSaveBtnClick}>
              Spara
            </button>
          </form>
        </section>
      )}
    </section>
  );
}

export default Account;
