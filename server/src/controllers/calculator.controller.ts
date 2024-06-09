import { Request, Response } from "express";

export class CalculatorController {
    static calculate(req: Request, res: Response) {

        const height = parseInt(req.body.height)/100;
        const weight = parseInt(req.body.weight);

        console.log(height, weight);

        res.json ( {
            "bmi": (weight/(height**2)).toFixed(2)
        })
    }
}