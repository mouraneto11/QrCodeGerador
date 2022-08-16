
import express, { response } from "express";
const routes = express.Router()

import qrCodeController from '../controller/qrCodeController'

const QrCodeController = new qrCodeController;

routes.get('/quero-qr', QrCodeController.get);
routes.post('/qrcode/:id', QrCodeController.post);
routes.put('/qrcode/:id', QrCodeController.put);
routes.delete('/qrcode/:id', QrCodeController.del);

export default routes;
