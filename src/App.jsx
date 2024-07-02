import { useState } from "react";
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const initialState = {
  _id: 1,
  boxSize: "Small",
  boxholder: "Alex",
};
function App() {
  const [mailboxes, setMailboxes] = useState([initialState]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />

        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />

        <Route
          path="/new-mailboxes"
          element={<MailboxForm addBox={addBox} />}
        />

        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
}

export default App;
