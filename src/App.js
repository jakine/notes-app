import React, { useEffect, useLayoutEffect, useState } from "react";
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

  // to render add note or not
  const [addNoteForm, setAddNoteForm] = useState(false);

  // the searchingbytext boolean check and search text defined
  const [searchingByText, setSearchingByText] = useState(false);
  const [searchedText, setSearchedText] = useState("");

  const [tag, setTag] = useState("");
  const [searchByTag, setSearchByTag] = useState(false);
  
  const [date, setDate] = useState("");
  const [searchingByDate, setSearchingByDate] = useState(false);

  //these arrays will be filled depending on the search
  const [searchedState, setSearchedState] = useState([]);
  const [searchedStateByTag, setSearchedStateTag] = useState([]);
  const [searchByDate, setSearchByDate] = useState([]);

  // FILTERING BY SEARCH
  const searchHandler = ({ searchText, oppositeSearched }) => {
    setSearchingByText(oppositeSearched);
    setSearchedText(searchText);
  };
  useEffect(() => {
    // fix it with lowercase
    const searchedNotes = noteListData.filter((note) =>
      note.notetext.includes(searchedText)
    );
    setSearchedState(searchedNotes);
  }, [searchingByText, state]);
  // console.log(noteListData);

  // FILTERING BY DATE
  const filterByDate = ({ formattedDate, oppositeSearched }) => {
    setDate(formattedDate);
    setSearchingByDate(oppositeSearched);
    // console.log(e, "APPPPPCLASS");
  };
  useEffect(() => {
    const searchedNotes = noteListData.filter((note) =>
      note.date.includes(tag)
    );
    // debugger
    setSearchByDate(searchedNotes);
  }, [date,searchingByDate, state]);

  // FILTERING BY TAG

  const filterByTag = ({ searchTag, oppositeSearched }) => {
    console.log('useeffect filtering by tag ')
    setTag(searchTag);
    setSearchByTag(oppositeSearched);
    // console.log(e, "APPPPPCLASS");
  };
  useEffect(() => {
    console.log('workign filter tag')
    const searchedNotes = noteListData.filter((note) =>
      note.notetag.includes(tag)
    );
    setSearchedStateTag(searchedNotes);
  }, [searchByTag, state, noteListData, tag]);

  console.log(state);
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
      <Search
        searchHandlerr={searchHandler}
        searchBydateHandler={filterByDate}
        searchTagHandlerr={filterByTag}
      />

      {addNoteForm && <AddNote onCancel={() => setAddNoteForm(false)} />}

      <div className={styles.notesDisplayScreen}>
        <div className={styles.allNotesDisplay}>
          <NoteList
            // noteList={noteListData}
            noteList={searchingByText ? searchedState : noteListData}
          />
        </div>
      
        {
          searchingByDate && (
          <div className={styles.notesWithCategories}>
            <NoteListBy noteList={searchByDate} />
          </div>
        ) }
        {searchByTag &&(
          <div className={styles.notesWithCategories}>
            <NoteListBy noteList={searchedStateByTag} />
          </div>
        )
        }
        {
          console.log(searchingByDate, 'search date ', searchByTag , 'search tag ')
        }

        
        {!(searchingByDate || searchByTag )&& (
          <div className={styles.notesWithCategories}>
            <NoteListBy noteList={noteListData} />
          </div>
        ) }
        
      </div>
    </div>
  );
};

export default App;
