import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class Note {
    @prop({type: String})
    title: string;
    @prop({type: String})
    description: string
    @prop({type: Boolean})
    done: boolean
}

export default getModelForClass(Note);