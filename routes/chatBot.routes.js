import { Router } from 'express'
import { chatbot } from '../controller/chatbot.controller.js'
const router = Router()
router.route("/chatBot").post(chatbot)

export default router