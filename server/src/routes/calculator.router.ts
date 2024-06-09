import express from "express";
import { CalculatorController } from "../controllers/calculator.controller.js";

const calculatorRouter = express.Router();

calculatorRouter.post("/", CalculatorController.calculate);

export { calculatorRouter };