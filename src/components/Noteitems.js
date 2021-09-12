import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitems = (props) => {
    const {note, updateNote, showAlert} = props;
    const {deleteNote} =  useContext(NoteContext)

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="d-flex justify-content-start">
                    <i className="fas fa-trash me-3" style={{cursor:'pointer'}} onClick={()=>{deleteNote(note.id); showAlert("note deleted", "success")}}></i>
                    <i className="fas fa-edit" onClick={()=>{updateNote(note)}} style={{cursor:'pointer'}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitems
