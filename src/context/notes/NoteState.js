import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteSatate = (props)=>{
    const inNotes = [
        {
          "id": 4,
          "title": "Todo List",
          "description": "Abhi abhi to start kiya",
          "tags": "personal",
          "date": "2021-09-05",
          "user": 22
        },
        {
          "id": 9,
          "title": "yup",
          "description": "Abhi abhi to start kiya",
          "tags": "personal",
          "date": "2021-09-05",
          "user": 22
        },
        {
          "id": 11,
          "title": "yup",
          "description": "Abhi abhi to start kiya",
          "tags": "personal",
          "date": "2021-09-05",
          "user": 22
        },
        {
          "id": 12,
          "title": "yup",
          "description": "Abhi abhi to start kiya",
          "tags": "personal",
          "date": "2021-09-05",
          "user": 22
        },
        {
          "id": 13,
          "title": "yup",
          "description": "Abhi abhi to start kiya",
          "tags": "personal",
          "date": "2021-09-05",
          "user": 22
        },
        {
          "id": 14,
          "title": "yup",
          "description": "Abhi abhi to start kiya",
          "tags": "personal",
          "date": "2021-09-05",
          "user": 22
        },
        {
          "id": 15,
          "title": "yup",
          "description": "Abhi abhi to start kiya",
          "tags": "personal",
          "date": "2021-09-05",
          "user": 22
        },
        
    ]

    const [notes, setNotes] = useState(inNotes)

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteSatate