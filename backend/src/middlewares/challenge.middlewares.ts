import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { firstChallenge } from "../utils/errorsTypes";

export const validateFirstChallenge = [
  body("targetSum")
    .exists()
    .withMessage(firstChallenge.TS_REQUIRED)
    .isInt({ min: 1 })
    .withMessage(firstChallenge.TS_CONDITIONS),

  body("numbers")
    .exists()
    .withMessage(firstChallenge.NUM_REQ)
    .isArray()
    .withMessage(firstChallenge.NUM_ARR)
    .custom((numbers) => {
      if (numbers.length < 2 || numbers.length > 5) {
        throw new Error(firstChallenge.NUM_CONDITIONS);
      }
      const hasDuplicates = new Set(numbers).size !== numbers.length;
      if (hasDuplicates) {
        throw new Error(firstChallenge.NUM_DUPLICATED);
      }
      return true;
    }),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
