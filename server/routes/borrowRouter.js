import express from 'express'
import { isAuthenticated, isAuthorized } from '../middleware/authMiddleware.js'
import { borrowedBooks, getBorrowedBooksForAdmin, recordBorrowedBook, returnBorrowedBook } from '../controllers/borrowControllers.js'

const borrowRouter = express.Router()

borrowRouter.post("/record-borrow-book/:id", isAuthenticated, isAuthorized("Admin"), recordBorrowedBook);

borrowRouter.get("/borrowed-books-by-users", isAuthenticated, isAuthorized("Admin"), getBorrowedBooksForAdmin)

borrowRouter.get("/my-borrowed-books", isAuthenticated, borrowedBooks);

borrowRouter.put("/return-borrowed-book/:bookId", isAuthenticated, isAuthorized("Admin"), returnBorrowedBook);

export default borrowRouter