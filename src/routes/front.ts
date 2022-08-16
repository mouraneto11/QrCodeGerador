
import express, { response } from "express";
const routes = express.Router()
const path = require('path')

routes.get('/', async (request, response) =>{
    
    return response.status(200).sendFile(path.join(__dirname, '../..', "src","front" , "index.html"));
});

export default routes;