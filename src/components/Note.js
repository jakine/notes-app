import styles from "./Note.module.css";
import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
  return (
    <div className={styles.note}>
      <div className={styles.noteContent}>
        <p className={styles.noteText}>{props.text}</p>
        <p className={styles.noteTag}> {props.tag}</p>
      </div>
      <div className={styles.noteFooter}>
        <p> <small>{props.date} </small> </p>
        <button className={styles.deleteIcon} onClick={()=>props.handleDeleteNote()}>
          <MdDeleteForever className="delete-icon" size="1.3em" />
        </button>
      </div>
    </div>
  );
};

export default Note;
