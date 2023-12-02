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
        origin: ["http://localhost:3000", "http://localhost:7000"],
    })
);


app.use("/api/v1/details", detailsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});





