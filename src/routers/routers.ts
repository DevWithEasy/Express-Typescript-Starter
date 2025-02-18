import { Application, Request, Response, Router } from "express";
import demoRouter from "./demoRouters";

type handlerType = (req: Request, res: Response) => void;

const routes: {
  path: string;
  handler: Router | handlerType;
}[] = [
  {
    path: "/api/demo",
    handler: demoRouter,
  },

  {
    path: "/",
    handler: (req: Request, res: Response) => {
      res.json({
        message: "Server is running",
      });
    },
  },
];

const applyRouter = (app: Application) => {
  routes.map((route) => {
    if (route.path === "/") {
      app.get(route.path, route.handler);
    } else {
      app.use(route.path, route.handler);
    }
  });
};

export default applyRouter;
