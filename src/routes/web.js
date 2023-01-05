import express from "express";
import homeController from "../controller/HomeController"

let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/",homeController.getHomePage);

  return app.use("/", router);
};

export default initWebRoutes;
