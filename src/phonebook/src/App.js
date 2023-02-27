import { Routes, Route, Navigate } from "react-router-dom";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import Table from "./pages/PhoneBook";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Navigate to="/phone-book" />} />
        <Route path="/phone-book" element={<Table />} />
        <Route path="/add-contact" element={<AddContact />}/>
        <Route path="/edit-contact" element={<EditContact />}/>
      </Routes>
    </div>
  );
}

export default App;
