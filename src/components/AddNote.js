import { useState, useEffect } from "react";
import uuid from "react-uuid";

import styles from "./AddNote.module.css";

import { GiCancel } from "react-icons/gi";

import { useDispatch, useSelector } from "react-redux";
import { noteActions, noteSlice } from "../store/noteSlice";
const AddNote = (props) => {
  // let newdate=new Date();
  const dispatch = useDispatch();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // console.log(date);
  const notesState = useSelector((state) => state.notes);

  const [noteText, setNoteText] = useState("");
  
  const [noteTag, setNoteTag] = useState("");

  const clearfields = () => {
    setNoteTag("");
    setNoteText("");
  };
  const handleSaveNote = (evt) => {
    evt.preventDefault();
    const currentNote = {
      id: uuid(),
      notetext: noteText,
      notetag: noteTag,
      date: date,
    };
    // console.log(currentNote);
    clearfields()
    dispatch(noteActions.addNotes(currentNote));
  };

  return (
    <form onSubmit={handleSaveNote} className={styles.noteNew}>
      <textarea
        className={styles.textArea}
        rows="8"
        cols="22"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={(event) => setNoteText(event.target.value)}
      />
      <textarea
        className={styles.tagging}
        type="text"
        placeholder="add a tag"
        onChange={(event) => setNoteTag(event.target.value)}
      />
      <div className={styles.noteFooter}>
        <button className={styles.save} type="submit">
          Save
        </button>
        <button className={styles.cancel} onClick={props.onCancel}>
          <GiCancel />
        </button>
      </div>
    </form>
  );
};

export default AddNote;
