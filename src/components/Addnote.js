import React from "react";
import { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import { useState } from "react";
import "./AddNote.css";
function Addnote() {
  const { Addnote } = useContext(NoteContext);
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const handlechange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    e.preventDefault();
    Addnote(note);
    setnote({ title: "", description: "", tag: "" });
  };
  return (
    <div className="container my-5">
      <h1 className="hadd">Add Note</h1>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={handlechange}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="description"
            onChange={handlechange}
            value={note.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={handlechange}
            value={note.tag}
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="butn hadd" onClick={handleclick}>
          Add Note
        </button>
      </form>
    </div>
  );
}

export default Addnote;
