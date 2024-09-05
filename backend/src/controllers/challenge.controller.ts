import { Request, Response } from "express";

import challengeService from "../services/challenge.service";

class ChallengeController {
  twoNumberSum(req: Request, res: Response) {
    try {
      const { numbers, targetSum } = req.body;
      const result = challengeService.twoNumberSum(numbers, targetSum);

      return res.status(200).json({ success: true, result });
    } catch (error) {}
  }
}

export default new ChallengeController();
