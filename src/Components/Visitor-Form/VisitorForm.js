import React, { useState } from "react";

import db from "../../firebase";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name</label>
      <input
        required
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="number">Enter your number</label>
      <input
        required
        id="number"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <label htmlFor="email">Enter your email</label>
      <input
        required
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="query">Enter your query message</label>
      <input
        id="query"
        type="textarea"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VisitorForm;
