// src/components/AddPlayerForm.js
import React, { useState } from "react";

export default function AddPlayerForm({ addPlayer }) {
  const [name, set_name] = useState("");

  const onClickButton = async () => {
    await addPlayer(name);
    set_name("");
  };
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          id="input"
          placeholder="name"
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />
        <button onClick={onClickButton}>Add</button>
      </p>
    </div>
  );
}
