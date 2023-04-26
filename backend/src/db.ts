import mongoose from 'mongoose'

export const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost/trpcdb")
    } catch (error) {
        console.log(error)
    }
}

