import styles from "./Note.module.css";
import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
  // console.log(props);
  return (
    <div className={styles.note}>
      <div className={styles.noteContent}>
        <p>{props.text}</p>
        <p>{props.tag}</p>
      </div>
      <div className="note-footer">
        <small>{props.date}</small>
        <button onClick={()=>props.handleDeleteNote()}>
          <MdDeleteForever className="delete-icon" size="1.3em" />
        </button>
      </div>
    </div>
  );
};

export default Note;
