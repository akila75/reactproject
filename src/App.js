import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [participants, setParticipants] = useState([]);
  const [message, setMessage] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setMessage("Please fill all fields.");
      return;
    }

    const exists = participants.find(
      (p) => p.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      setMessage("Participant already registered!");
      return;
    }

    const newParticipant = { name, email, phone };

    setParticipants([...participants, newParticipant]);
    setMessage("Registration Successful!");

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container">
      <h1>Workshop Registration</h1>

      <form onSubmit={register}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <p>{message}</p>

      <h2>Registered Participants</h2>

      <ul>
        {participants.map((p, index) => (
          <li key={index}>
            <strong>{p.name}</strong><br />
            {p.email}<br />
            {p.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;