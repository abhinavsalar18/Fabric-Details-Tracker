import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/db/dbConnection.js";
import cors from "cors"
import detailsRouter from "./src/routes/details.routes.js"
dotenv.config();

const app = express();

connectDB();


app.use(express.json());

app.use(
    cors({
        origin: [process.env.FRONTEND_BASE_URL, process.env.SERVER_BASE_URL],
    })
);


app.use("/api/v1/details", detailsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});





