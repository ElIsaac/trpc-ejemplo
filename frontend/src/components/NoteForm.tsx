import { ChangeEvent, FormEvent, useState } from "react"
import { trpc } from '../trpc'

function NoteForm() {

    const [note, setNote] = useState({
        title:"",
        description:""
    })
    const addNote = trpc.note.create.useMutation()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNote.mutate(note, {
            onSuccess: ()=>{
                console.log("nota anadidada ok")
            }
        });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNote({...note, [e.target.name]: e.target.value})
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="title" onChange={handleChange} />
            <textarea name="description" placeholder="description" onChange={handleChange}></textarea>
            <button type="submit">
                save
            </button>
        </form>
    )
}

export default NoteForm
