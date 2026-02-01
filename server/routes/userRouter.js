import express, { Router } from 'express'
import { isAuthenticated, isAuthorized} from '../middleware/authMiddleware.js'
import { getUsers, registerNewAdmin } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.get("/all", isAuthenticated, isAuthorized("Admin"), getUsers);
userRouter.post("/add/new-admin", isAuthenticated, isAuthorized("Admin"), registerNewAdmin)

export default userRouter