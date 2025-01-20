import mongoose ,{Schema} from "mongoose";


const OptionSchema = new Schema({
    text: { type: String, required: true },
    nextQuestionId: { type:Schema.Types.ObjectId, ref: "Question", default: null },
  });
const questionSchema = new Schema({
    question : {
        type: String,

    },
    options : [OptionSchema]
},{
    timestamps: true
})

export const  Question = mongoose.model("Question" , questionSchema)