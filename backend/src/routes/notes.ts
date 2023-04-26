import {publicProcedure, router} from '../trpc'
import {z} from 'zod'
import Note from '../models/Note'

const getNotes = publicProcedure.query(async()=>{
    const note = await Note.find()
    return note;
})

const createNote = publicProcedure.input(z.object({
    title:z.string(),
    description:z.string()

}))
.mutation(async({input})=>{
    const newNote = new Note({
        title:input.title,
        description:input.description
    })
    const saveNote = await newNote.save()
    return saveNote

})

export const notesRouter = router({
    get: getNotes,
    create: createNote
});