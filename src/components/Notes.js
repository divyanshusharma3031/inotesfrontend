import React from "react";
import { useContext, useRef } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import { useEffect } from "react";
import NoteItem from "./NoteItem";
import { useState } from "react";
import {useHistory} from 'react-router-dom'
import "./Notes.css"
function Notes(props) {
  let history=useHistory();
  const { notes, getnote, editnote } = useContext(NoteContext);
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getnote();
    }
    else
    {
      history.push("/login");
    }
  }, []);
  const refclose = useRef(null);

  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const updatenote = (cnote) => {
    setnote({
      id: cnote._id,
      etitle: cnote.title,
      edescription: cnote.description,
      etag: cnote.tag,
    });
    ref.current.click();
    
    console.log(note);
  };
  const handlechange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleupdate = () => {
    editnote(note.id, note.etitle, note.edescription, note.etag);
    console.log("updating note");
    console.log(note);
    refclose.current.click();
    props.showalert("Updated Succesfully","success");
  };
  const ref = useRef(null);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade edit"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog editcolor">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title editheading" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="container">
              <div className="mb-3">
                <label htmlFor="title" className="form-label editcolor">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  aria-describedby="emailHelp"
                  onChange={handlechange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label editcolor">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  name="edescription"
                  value={note.edescription}
                  onChange={handlechange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label editcolor">
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tag"
                  name="etag"
                  value={note.etag}
                  onChange={handlechange}
                />
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                ref={refclose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleupdate}
              >
                UpdateNote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div classname="container">
          {notes.length === 0 && "No notes to display"}
        </div>
        <div className="row my-3">
          {notes.map((note) => {
            return (
              <NoteItem note={note} key={note._id} updatenote={updatenote} showalert={props.showalert} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;
