import React from "react";
import styles from "./NoteListBy.module.css";
import Note from "../components/Note";

import { useDispatch, useSelector } from "react-redux";
import { noteActions, noteSlice } from "../store/noteSlice";

const NoteListBy = (props) => {
  const dispatch = useDispatch();

  const deleteNote = (note) => {
    dispatch(noteActions.deleteNote(note));
    {
      console.log(props.noteList);
    }
  };

  return (
    <div className={styles.noteListBy}>
      <h3> {props.tag ? `Note by tag ${props.tag}` : `All notes`}</h3>
      <div className={styles.noteListByChildren}>
        {props.noteList.length > 0 &&
          props.noteList.map((note) => (
            <Note
              key={note.id}
              text={note.notetext}
              tag={note.notetag}
              date={note.date}
              handleDeleteNote={() => deleteNote(note)}
            />
          ))}
      </div>
    </div>
  );
};

export default NoteListBy;
