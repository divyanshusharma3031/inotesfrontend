import React from "react";
import { useState } from "react";
import Notecontext from "./NoteContext";
import { useEffect } from "react";
const Notestate = (props) => {
  const host = "https://backendinotes.herokuapp.com/";
  const note = [];
  const getnote = async () => {
    const response = await fetch(`${host}/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authtoken:
          localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    setnotes(json);
    console.log(json);
  };
  const [notes, setnotes] = useState(note);
  const Addnote = async (element) => {
    let title = element.title;
    let description = element.description;
    let tag = element.tag;
    const response = await fetch(`${host}/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authtoken:
          localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    getnote();
  };

  const delnote = async (id) => {
    const response = await fetch(`${host}/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authtoken:
          localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log("deleted " + id);
    getnote();
  };

  const editnote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authtoken:
          localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newnote = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newnote.length; i++) {
      if (newnote[i]._id === id) {
        newnote[i].title = title;
        newnote[i].description = description;
        newnote[i].tag = tag;
        break;
      }
    }
    setnotes(newnote);
  };
  return (
    // more than one ko pass karne ke liye object ki tarah bhejna padega
    <Notecontext.Provider
      value={{ notes, Addnote, delnote, editnote, getnote }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
