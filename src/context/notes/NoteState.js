import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteSatate = (props) => {
  const host = "http://127.0.0.1:8000";
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/allNotes/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "authToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMiwidXNlcm5hbWUiOiJiaGF2ZXNoMyJ9.MreeCuMfTAzdrXXur86ta-1YqImzopsfrXPfe3w8BQw"
      }
    });
    const data = await response.json();
    setNotes(data)
  };
  
  // add Note
  const addNote = async(title, description, tags) => {
    const response = await fetch(`${host}/api/createNote/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "authToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMiwidXNlcm5hbWUiOiJiaGF2ZXNoMyJ9.MreeCuMfTAzdrXXur86ta-1YqImzopsfrXPfe3w8BQw"
      },
      body: JSON.stringify({title, description, tags})
    });
    const data = await response.json();
    setNotes(notes.concat(data));
  };

  // edit Note
  const editNote = async(id, title, description, tags) => {
    const response = await fetch(`${host}/api/editNote/${id}/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        "authToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMiwidXNlcm5hbWUiOiJiaGF2ZXNoMyJ9.MreeCuMfTAzdrXXur86ta-1YqImzopsfrXPfe3w8BQw"
      },
      body: JSON.stringify({title, description, tags})
    });
    let json = await response.json()
    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tags = tags;
        break;
      }
    }
    setNotes(newNotes)
  };

  // deleteNote
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/deleteNote/${id}/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        "authToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMiwidXNlcm5hbWUiOiJiaGF2ZXNoMyJ9.MreeCuMfTAzdrXXur86ta-1YqImzopsfrXPfe3w8BQw"
      }
    });
    const json = await response.json()
    const data = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(data);
  };


  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteSatate;
