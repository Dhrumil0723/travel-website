import React, { useState } from "react";

import "./Visitor-Form.style.css";
import db from "../../firebase";

const Form = ({
  handleSubmit,
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  query,
  setQuery,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name: </label>
          <input
            required
            autoComplete="off"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="number">Contact no. : </label>
          <input
            required
            autoComplete="off"
            id="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email: </label>
          <input
            required
            autoComplete="off"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="query">Feedback: </label>
          <input
            id="query"
            type="textarea"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="submit-btn">
        <button type="submit">
          Submit <i class="far fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

const VisitorForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryMessage = {
      name,
      number,
      email,
      query,
    };

    db.collection("queries").add(queryMessage);

    setName("");
    setNumber(0);
    setEmail("");
    setQuery("");
  };

  return (
    <div className="form">
      <div className="visitor-form">
        <div className="text">
          <h1>Help us to Provide better by fillng a feedback !</h1>
        </div>
        <div className="form-wrapper">
          <Form
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
            email={email}
            setEmail={setEmail}
            query={query}
            setQuery={setQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default VisitorForm;
