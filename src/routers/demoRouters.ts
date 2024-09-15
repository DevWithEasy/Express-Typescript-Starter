import { Router } from "express";
import * as demoControllers from "../controllers/demoControllers";

const demoRouter = Router();

demoRouter.get('/',demoControllers.demo);

export default demoRouter;