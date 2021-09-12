import React, {useContext, useState} from 'react'
import notesContext from '../context/notes/NoteContext'

function AddNotes(props) {
    let context = useContext(notesContext)
    let {addNote} = context;

    const [noteData, setnoteData] = useState({"title":"", "description":"", "tags":""})
    const onChangeHandle = (e)=>{
        setnoteData({...noteData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        addNote(noteData.title, noteData.description, noteData.tags)
        e.preventDefault()
        setnoteData({"title":"", "description":"", "tags":""})
        props.showAlert("Note added!", "success")
    }

    return (
        <div>
            <h3 className="my-3 text-center">Add Notes</h3>
            <form className="w-50 m-auto">
            <div className="mb-3">
                <label htmlFor="title">Title</label>
                <input className="form-control" type="text" name="title" value={noteData.title} id="title" onChange={onChangeHandle} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="description">Description</label>
                <input className="form-control" type="text" name="description" value={noteData.description} id="description" onChange={onChangeHandle} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags">Tags</label>
                <input className="form-control" type="text" name="tags" value={noteData.tags} id="tags" onChange={onChangeHandle} required/>
            </div>
            <button disabled={noteData.title.length <5 || noteData.description.length<5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default AddNotes
