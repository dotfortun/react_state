import React, { useState, useEffect } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [someList, setList] = useState([]);

  const [render, rerender] = useState(false);

  const handleEmailUpdate = (event) => {
    setEmail(event.target.value);
  };

  const handlePwdUpdate = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  const updateList = () => {
    let list = someList;
    list.push({
      email: email,
      pass: password,
      isChecked: checkbox,
    });
    setList(list);
  };

  const handleSubmit = () => {
    console.log({
      email: email,
      pass: password,
      isChecked: checkbox,
    });
    updateList();
    rerender(!render);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-4 offset-4">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={handleEmailUpdate}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={handlePwdUpdate}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              value={checkbox}
              onChange={handleCheckbox}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col col-4 offset-4">
          <ul>
            <li>email: {email}</li>
            <li>password: {password}</li>
            <li>checkbox: {checkbox.toString()}</li>
            <li>
              all login attempts:{" "}
              {someList.map((elem) => {
                return JSON.stringify(elem);
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
