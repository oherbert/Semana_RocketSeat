import { Router } from "express";
import { SurveyController } from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();

router.get("/surveys", surveyController.getAll);

router.post("/users", userController.create);
router.post("/surveys", surveyController.create);

export {router};