import NoteContext from "./NoteContext";
import { useState } from "react";
import jwtDecode from "jwt-decode";

const NoteSatate = (props) => {
  const host = "http://127.0.0.1:8000";
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/allNotes/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "authToken":localStorage.getItem('token')
      }
    });
    const data = await response.json();
    setNotes(data)
  };
  
  // add Note
  const addNote = async(title, description, tags) => {
    let user = jwtDecode(localStorage.getItem('token'))
    user = user.user_id;
    const response = await fetch(`${host}/api/createNote/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "authToken":localStorage.getItem('token')
      },
      body: JSON.stringify({user,title, description, tags})
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
        "authToken":localStorage.getItem('token')
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
        "authToken":localStorage.getItem('token')
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
