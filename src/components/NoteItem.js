import React, { useContext } from "react";
import Notecontext from "../Context/Notes/NoteContext";
import "./Noteitem.css";
function NoteItem(props) {
  const note = props.note;
  const {delnote}=useContext(Notecontext);
  const handleclick=async ()=>{
    await delnote(note._id);
    props.showalert("Deleted Successfully","success");
  }
  return (
    <div className="col-md-3 my-3 notescolor">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i className="fas fa-trash mx-2" onClick={handleclick}></i>
              <i className="far fa-edit" onClick={()=>{ props.updatenote(note)}}></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
