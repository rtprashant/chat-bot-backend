import { Question } from "../model/chatbot.model.js"

const questionSeeding = async () => {
    try {
        await Question.deleteMany()
        const question1 = await new Question({
            question: "Are you a job seeker or an employer?",
            options: [
                { text: "Job Seeker", nextQuestionId: null },
                { text: "Employer", nextQuestionId: null },
            ],

        }).save()
        const question2 = await new Question({
            question: "What type of job are you looking for?",
            options: [
                { text: "Full-Time", nextQuestionId: null },
                { text: "Part-Time", nextQuestionId: null },
            ],
        }).save();
        const question3 = await new Question({
            question: "What industry are you interested in?",
            options: [
                { text: "Technology", nextQuestionId: null },
                { text: "Healthcare", nextQuestionId: null },
                { text: "Finance", nextQuestionId: null },
            ],
        }).save();

        const question4 = await new Question({
            question: "What type of position are you hiring for?",
            options: [
                { text: "Full-Time", nextQuestionId: null },
                { text: "Part-Time", nextQuestionId: null },
            ],
        }).save();

        const question5 = await new Question({
            question: "Which industry are you hiring in?",
            options: [
                { text: "Technology", nextQuestionId: null },
                { text: "Healthcare", nextQuestionId: null },
                { text: "Finance", nextQuestionId: null },
            ],
        }).save();
       

        const question6 = await new Question({
            question: "What type of skills are required?",
            options: [
                { text: "Web Development", nextQuestionId: null },
                { text: "Machine Learning", nextQuestionId: null },
                { text: "Data Analysis", nextQuestionId: null },
            ],
        }).save();
        const question8 = await new Question({
            question: "What type of skills You have?",
            options: [
                { text: "Web Development", nextQuestionId: null },
                { text: "Machine Learning", nextQuestionId: null },
                { text: "Data Analysis", nextQuestionId: null },
            ],
        }).save();
        const question9 = await new Question({
            question: "What's your highest Education ?",
            options: [
                { text: "PG", nextQuestionId: null },
                { text: "UG", nextQuestionId: null },
                { text: "Diploma", nextQuestionId: null },
            ],
        }).save();
        const question10 = await new Question({
            question: "Experience ?",
            options: [
                { text: "0-1 years", nextQuestionId: null },
                { text: "1-3 years", nextQuestionId: null },
                { text: "3-5 years", nextQuestionId: null },
                { text: "more than 5 years", nextQuestionId: null },
            ],
        }).save();


        question1.options[0].nextQuestionId = question2._id
        question2.options[0].nextQuestionId = question3._id
        question2.options[1].nextQuestionId = question3._id
        question1.options[1].nextQuestionId = question4._id
        question4.options[0].nextQuestionId = question5._id
        question4.options[1].nextQuestionId = question5._id
        question5.options[0].nextQuestionId = question6._id
        question3.options[0].nextQuestionId = question8._id
        question3.options[1].nextQuestionId = question9._id
        question3.options[2].nextQuestionId = question9._id
        question8.options[0].nextQuestionId = question9._id
        question8.options[1].nextQuestionId = question9._id
        question8.options[2].nextQuestionId = question9._id
        question9.options[0].nextQuestionId = question10._id
        question9.options[1].nextQuestionId = question10._id
        question9.options[2].nextQuestionId = question10._id
      
        await question1.save();
        await question2.save();
        await question3.save();
        await question4.save();
        await question5.save();
        await question6.save();
        await question8.save();
        await question9.save();
        await question10.save();
        console.log("question seeding successful");


    } catch (error) {
        console.log(`error in question seeding ${error}`);


    }
}
export default questionSeeding