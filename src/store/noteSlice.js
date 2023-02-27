import { createSlice } from "@reduxjs/toolkit";

const noteStoreStorage = {
  allNotes: [],
  allTags: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState: noteStoreStorage,
  reducers: {
    addNotes(state, action) {
      const newNote = action.payload;
      state.allNotes.push(newNote);
      state.allTags.push(newNote.notetag);
      // console.log('printing state',state.allNotes)
    },
    deleteNote(state, action) {
      // debugger
      const a = action.payload.id;
      console.log('deleting id',a);
      const afterDelete = state.allNotes.filter(e=> e.id !== a);
      
      // state.allNotes = state.allNotes.filter(note => note.id !== noteId);

      state.allNotes = afterDelete;
      // debugger
      // console.log('after detetion',allNotes)
      // console.log('printing state',afterDelete)

    },
    selectNoteByText(state, action) {},
    selectNoteTag(state, action) {},
    selectNoteByDate(state, action) {},
  },
});
export const noteActions = noteSlice.actions;

export default noteSlice;
