import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./App.module.css";
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import NoteList from "./Pages/NoteList";
import NoteListBy from "./Pages/NoteListBy";

const App = () => {
  const state = useSelector((state) => state.notes);
  const noteListData = useSelector((state) => state.notes.allNotes);

  const [addNoteForm, setAddNoteForm] = useState(false);

  const [searching, setSearching] = useState(false);

  const [searchedText, setSearchedText] = useState("");

  const [searchedState, setSearchedState] = useState([]);

  const searchHandler = ({ searchText, oppositeSearched }) => {
    setSearching(oppositeSearched);
    setSearchedText(searchText);
  };

  useEffect(() => {
    const searchedNotes = noteListData.filter((note) =>
      note.notetext.includes(searchedText)
    );
    setSearchedState(searchedNotes);
  }, [searching]);

  const filterByDate = (e) => {
    console.log( "APPPPPCLASS");
    console.log(e.date, "APPPPPCLASS");

  };

  return (
    <div>
      <Navbar />
      {!addNoteForm && (
        <button
          className={styles.addnoteButton}
          onClick={() => setAddNoteForm(true)}
        >
          addNote
        </button>
      )}
      <Search searchHandlerr={searchHandler} />

      {addNoteForm && <AddNote onCancel={() => setAddNoteForm(false)} />}


      <div className={styles.notesDisplayScreen}>
        <div className={styles.allNotesDisplay}>
          <NoteList
            // noteList={noteListData}
            noteList={searching ? searchedState : noteListData}
          />
        </div>
        
        <div className={styles.notesWithCategories}>
          <NoteListBy noteList={noteListData} searchBydateHandler={filterByDate} />
        </div>
      </div>

    </div>
  );
};

export default App;
