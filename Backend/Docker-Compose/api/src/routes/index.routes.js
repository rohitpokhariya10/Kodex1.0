import { Router } from "express";

const indexRouter = Router();

/*  
GET 
route --> /api
*/

indexRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the route...",
  });
});

export default indexRouter;
