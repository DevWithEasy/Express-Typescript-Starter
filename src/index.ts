import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import dbConnection from "./config/dbConection";
import applyRouter from "./routers/routers";
import applyMidleware from "./middlewares/middlewares";

dotenv.config();
const app: Application = express();

app.get("/", (request: Request, response: Response) => {
  response.json({
    message: "Server is running",
  });
});

//apply routes
applyRouter(app);

applyMidleware(app);
//database connection
const db_url: string = process.env.DATABASE_URL!;

//server initialization
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  dbConnection(db_url);
});
