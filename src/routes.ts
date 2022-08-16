import express from "express";
import index from "./routes/index";

const routes = express.Router()
routes.use(index);

export default routes;