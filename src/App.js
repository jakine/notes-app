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

  // this is to apply the background color
  const [modeToggler, setModeToggler] = useState(false);
  const classnameBackground = modeToggler
    ? styles.appDarkBackgroundBackground
    : styles.appLightBackgroundBackground;

  const setBackGround = ({ modeState }) => {
    setModeToggler(modeState);
    classnamewback;
  };

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
  }, [date, searchingByDate, state]);

  // FILTERING BY TAG

  const filterByTag = ({ searchTag, oppositeSearched }) => {
    console.log("useeffect filtering by tag ");
    setTag(searchTag);
    setSearchByTag(oppositeSearched);
  };
  useEffect(() => {
    console.log("workign filter tag");
    const searchedNotes = noteListData.filter((note) =>
      note.notetag.includes(tag)
    );
    setSearchedStateTag(searchedNotes);
  }, [searchByTag, state, noteListData, tag]);

  console.log(state);
  return (
    <div className={classnameBackground}>
      <Navbar modeToggler={setBackGround} />

      <div className={styles.addnoteDiv}>
        {!addNoteForm && (
          <button
            className={styles.addnoteButton}
            onClick={() => setAddNoteForm(true)}
          >
            addNote
          </button>
        )}
        {addNoteForm && <AddNote onCancel={() => setAddNoteForm(false)} />}
      </div>

      <Search
        searchHandlerr={searchHandler}
        searchBydateHandler={filterByDate}
        searchTagHandlerr={filterByTag}
      />

      <div className={styles.notesDisplayScreen}>
        <div className={styles.allNotesDisplay}>
          {( !(searchingByText) &&  noteListData.length > 0 )   && (
              <NoteList
                noteList={noteListData}
              />
          )}

          {searchingByText && (searchedState.length > 0 ) && (
              <NoteList
                noteList={searchedState}
              />
          )}
        </div>

        <div className={styles.notesWithCategories}>
          {searchingByDate && searchByDate.length > 0 && (
              <NoteListBy noteList={searchByDate} />
          )}

          {searchByTag && searchedStateByTag.length > 0 && (
              <NoteListBy tag={tag} noteList={searchedStateByTag} />
          )}

          {!(searchingByDate || searchByTag) && noteListData.length > 0 && (
              <NoteListBy noteList={noteListData} />
          )}

        </div>

      </div>
    </div>
  );
};

export default App;
