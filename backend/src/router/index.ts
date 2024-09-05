import { Router } from "express";
import { validateFirstChallenge } from "../middlewares/challenge.middlewares";
import ChallengeController from "../controllers/challenge.controller";

const router = Router();

router.get(
  "/two-number-sum",
  validateFirstChallenge,
  ChallengeController.twoNumberSum
);

router.get("/non-constructible-change");

export default router;
