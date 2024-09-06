import { Request, Response } from "express";

import challengeService from "../services/challenge.service";
import { generic } from "../utils/errorsTypes";

class ChallengeController {
  twoNumberSum(req: Request, res: Response) {
    try {
      const { numbers, targetSum } = req.body;
      const result = challengeService.twoNumberSum(numbers, targetSum);

      return res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, message: generic });
    }
  }

  nonConstructibleChange(req: Request, res: Response) {
    try {
      const { coins } = req.body;
      const result = challengeService.nonConstructibleChange(coins);

      return res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, message: generic });
    }
  }
}

export default new ChallengeController();
