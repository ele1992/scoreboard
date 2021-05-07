import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import "./Scoreboard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(a, b) {
  return a.name.localeCompare(b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score");

  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 0 },
    { id: 2, name: "Eszter", score: 0 },
    { id: 3, name: "Jeroen v2", score: 0 },
    { id: 4, name: "Lisa", score: 0 },
  ]);
  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  function resetScore() {
    const new_players_array = players.map((player) => {
      return { ...player, score: 0 };
    });
    set_players(new_players_array);
  }
  function randomScore() {
    const new_players_array = players.map((player) => {
      const random = parseInt(Math.random() * 100);
      return { ...player, score: random };
    });
    set_players(new_players_array);
  }

  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    set_players(new_players_array);
  };

  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    set_players([...players, { id: players.length + 1, name: name, score: 0 }]);
  };

  const players_sorted = [...players];
  sort_by === "score"
    ? players_sorted.sort(compare_score)
    : players_sorted.sort(compare_name);

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={resetScore}>Reset</button>
      <button onClick={randomScore}>Random</button>
      <ul>
        {players_sorted.map((player) => {
          const { name, score, id } = player;
          return (
            <Player
              id={id}
              name={name}
              score={score}
              incrementscore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
