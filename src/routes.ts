import { Router } from "express";
import { ClientController } from "./controller/ClientController";


const clientController = new ClientController()

const routes = Router()


routes.post('/client', clientController.createClient)

export {routes}