import { Question } from "../model/chatbot.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";

const chatbot = async(req , res)=>{
    const {question ,  selectedAnswer} = req.body;
    if(!question){
        throw new apiError("No Question detected" , 404)
    }
    console.log(`selectedAnswer ans is ${ selectedAnswer}`);
    
    if(! selectedAnswer){
        throw new apiError("No Answer selected" , 404)
    }
    try {
       const currentQuestion =  await Question.findOne({
            question
        })
        if(!currentQuestion){
            throw new apiError("Unable to answer the Question Sorry " , 404);
        }
    
        const selectedOpt =  currentQuestion.options.find((opt)=>opt.text=== selectedAnswer)
        console.log(selectedOpt);
        const nextQuestionID = selectedOpt.nextQuestionId
        let nextQuestion = null 
        let nextOptions = null
        if(nextQuestionID){
            const fetchQuestion = await Question.findById(nextQuestionID)
            if(fetchQuestion){
                nextQuestion = fetchQuestion.question
                nextOptions = fetchQuestion.options.map((opt)=>opt.text)
            }
        }
        

        res.
        status(200)
        .json(
            new apiResponse (
                200,
                {
                    selectedOpt,
                    nextQuestion,
                    nextOptions
                },
                "Question Answered Successfully"
            )
        )
    } catch (error) {
        console.log(error);
        
    }

}

export {
    chatbot
}