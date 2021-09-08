import React, {useContext} from 'react'
import notesContext from '../context/notes/NoteContext'
import Noteitems from './Noteitems'

function Notes() {
    let context = useContext(notesContext)
    let {notes, setNotes} = context
    return (
        <>
        <h3 className="my-3">Your Notes</h3>
        <div className="row">
        {notes.map(function (note){
            return <Noteitems note={note} />
        })}
        </div>
        </>
    )
}

export default Notes
