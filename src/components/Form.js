import React, { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [data, setData] = useState([
    { id: uuidv4(), txt: "Jouer à Fifa" },
    { id: uuidv4(), txt: "Manger" },
    { id: uuidv4(), txt: "Dormir" },
  ]);

  const [input, setInput] = useState();

  function deleteItem(id) {
    const filteredState = data.filter((item) => {
      return item.id !== id;
    });
    toast.error("Element supprimé");
    setData(filteredState);
  }

  function linkedInput(e) {
    setInput(e);
  }
  function addTodo(e) {
    e.preventDefault();
    const newData = [...data];

    const newTodo = {};
    newTodo.txt = input;
    newTodo.id = uuidv4();

    newData.push(newTodo);
    setData(newData);
    toast.success("Element ajouté");
    setInput("");
  }

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <Toaster />
      <form className="mb-3" onSubmit={(e) => addTodo(e)}>
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire
        </label>
        <input
          type="text"
          className="form-control"
          id="todo"
          onInput={(e) => linkedInput(e.target.value)}
          value={input}
          required
        />

        <div class="container">
          <div class="row">
            <div class="col text-center">
              <button className="mt-2 btn btn-success">Ajouter</button>
            </div>
          </div>
        </div>
      </form>
      <h2>Liste des choses à faire : </h2>

      {data.length === 0 ? (
        <h3 className="text-white text-center fw-bold">C'est vide 😢</h3>
      ) : (
        <ul className="list-group shadow-lg p-3 mb-5 bg-body-tertiary  rounded">
          {data.map((item) => {
            return (
              <Item
                id={item.id}
                txt={item.txt}
                key={item.id}
                delItem={deleteItem}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Form;
