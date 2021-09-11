import React, {useContext, useEffect, useRef, useState} from 'react'
import notesContext from '../context/notes/NoteContext'
import AddNotes from './AddNotes'
import Noteitems from './Noteitems'

function Notes() {
    let context = useContext(notesContext)
    let {notes, getNotes, editNote} = context
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])

    
    const ref = useRef(notes)
    const refClose = useRef(notes)

    const [noteData, setnoteData] = useState({"id":"", "etitle":"", "edescription":"", "etags":""})

    const updateNote = (currentNote)=>{
        ref.current.click()
        setnoteData({id:currentNote.id , etitle: currentNote.title, edescription: currentNote.description, etags:currentNote.tags})
    }

    const onChangeHandle = (e)=>{
        setnoteData({...noteData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        refClose.current.click()
        editNote(noteData.id, noteData.etitle, noteData.edescription, noteData.etags)
    }


    return (
        <>
        <AddNotes />

        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#editModal">
        Edit
        </button>


        <div className="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Edit Note</h5>
                <button type="button" ref={refClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                <div className="mb-3">
                    <label htmlFor="etitle">Title</label>
                    <input className="form-control" type="text" name="etitle" value={noteData.etitle} id="etitle" onChange={onChangeHandle} />
                </div>
                <div className="mb-3">
                    <label htmlFor="edescription">Description</label>
                    <input className="form-control" type="text" name="edescription" value={noteData.edescription} id="edescription" onChange={onChangeHandle} />
                </div>
                <div className="mb-3">
                    <label htmlFor="etags">Tags</label>
                    <input className="form-control" type="text" name="etags" value={noteData.etags} id="etags" onChange={onChangeHandle} />
                </div>
                </form>
            </div>
            <div className="modal-footer">
                <button disabled={noteData.etitle.length <5 || noteData.edescription.length<5} type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
            </div>
            </div>
        </div>
        </div>
        <h3 className="my-3 text-center">Your Notes</h3>
        <div className="container text-center">
            {notes.length===0 && 'No note to display'}
        </div>
        <div className="row">

            
        {notes.map(function (note){
            return <Noteitems key={note.id} updateNote={updateNote} note={note} />
        })}
        </div>
        </>
    )
}

export default Notes
