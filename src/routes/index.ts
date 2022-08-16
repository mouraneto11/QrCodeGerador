import express from "express";

//Rotas
import front from "./front";
import qrCode from "./qrCode";

const routes = express.Router()
routes.use(front);
routes.use(qrCode);

export default routes;