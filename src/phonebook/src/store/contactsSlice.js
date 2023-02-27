import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  allContacts: [],
  selectedContact: null,
};

const contactsList = createSlice({
  name: "contacts",
  initialState: usersInitialState,
  reducers: {
    addContact(state, action) {
      const newContact = action.payload
      state.allContacts.push(newContact);
    },
    editContact(state,action){
      const contactToEdit=action.payload
      const existingContact=state.allContacts.find(
        // (item)=userToEdit.id===item.id
      )
    },
    deleteContact(state,action){
      const a=action.payload.id
      const afterDeletet=state.allContacts.filter(e=>e.id!=a)
      state.allContacts=afterDeletet
      // state.allContacts[a].pop;
    }
    // editContact(state, action) {
    //   state.action.edit()
    // },
    // deleteContact(state, action) {
    //   state.action.remove()
    // }
  },
})

export const contactsListActions = contactsList.actions;

export default contactsList;