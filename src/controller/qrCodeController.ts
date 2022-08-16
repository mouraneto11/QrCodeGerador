import { Request, Response } from "express";
import qrCodeService from "../services/qrCodeService";

const QrCodeService = new qrCodeService
const path = require('path')


export default class qrCodeController {
    constructor() { }

    async get(request: Request, response: Response) {
        const text = request.query.text;
        const type = request.query.type;

        if (type == "2") {
            await QrCodeService.gerarQrCodeImg(text);
            return response.status(200).sendFile(path.join(__dirname, '../..', "file.png"));

        } else {
            var base64 = await QrCodeService.gerarQrCode(text);
            return response.status(200).send(base64);
        }
    }

    async post(request: Request, response: Response) {
        const id = request.params.id;
        return response.status(200).json({ id: id, name: "aloha post" });

    }
    async put(request: Request, response: Response) {

    }
    async del(request: Request, response: Response) {

    }

}