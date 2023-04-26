import {publicProcedure, router} from '../trpc'

const getNotes = publicProcedure.query(()=>{
    return [{
        id: 1,
        title: "Hola",
        content: "content type"
    }];
})

export const notesRouter = router({
    get: getNotes
});