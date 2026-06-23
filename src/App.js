import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [participants, setParticipants] = useState([]);
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    const exists = participants.find(
      (participant) => participant.email === email
    );

    if (exists) {
      setMessage("Participant already registered!");
      return;
    }

    const newParticipant = { name, email };

    setParticipants([...participants, newParticipant]);
    setMessage("Registration Successful!");

    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Workshop Registration</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <button onClick={handleRegister}>
        Register
      </button>

      <h3>{message}</h3>

      <h2>Participants List</h2>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>
            {participant.name} - {participant.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;