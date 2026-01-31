import express from 'express'
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { connectDB } from './databaase/db.js';
import { errorMiddleware } from './middleware/errorMiddlewares.js';
import router from './routes/authRoutes.js';
import bookRouter from './routes/bookRouter.js';

export const app = express();


config({ path: "./config/config.env" })

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/auth", router)
app.use("/api/v1/book", bookRouter)

connectDB()

app.use(errorMiddleware)