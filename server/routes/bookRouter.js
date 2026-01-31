import { addBook, deleteBook, getAllBooks } from "../controllers/bookController.js";
import { isAuthenticated, isAuthorized } from "../middleware/authMiddleware.js";
import express from 'express'

const bookRouter = express.Router()

bookRouter.post("/admin/add", isAuthenticated, isAuthorized("Admin"), addBook);
bookRouter.get("/all", isAuthenticated, getAllBooks);
bookRouter.delete("/delete/:id", isAuthenticated, isAuthorized("Admin"), deleteBook)

export default bookRouter