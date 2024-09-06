import { Router } from "express";
import {
  validateFirstChallenge,
  validateSecondChallenge,
} from "../middlewares/challenge.middlewares";
import ChallengeController from "../controllers/challenge.controller";

const router = Router();

router.get(
  "/two-number-sum",
  validateFirstChallenge,
  ChallengeController.twoNumberSum
);

router.get(
  "/non-constructible-change",
  validateSecondChallenge,
  ChallengeController.nonConstructibleChange
);

export default router;
