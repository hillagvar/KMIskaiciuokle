import express, { Application, Request, Response } from "express";
import { calculatorRouter } from "./routes/calculator.router";

const app: Application = express();

app.use(express.json());

app.use((req: Request,res: Response, next: any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

    next();
})

app.use("/calculate", calculatorRouter);

export { app };