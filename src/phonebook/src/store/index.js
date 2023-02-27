import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from './contactsSlice'

const store = configureStore({
  reducer: { contacts: contactsSlice.reducer },
});

export default store;