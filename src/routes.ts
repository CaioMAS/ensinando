import { Router } from "express";
import { ClientController } from "./controller/ClientController";
import { ClerkController } from "./service/Clerk";


const clientController = new ClientController()
const clerkController = new ClerkController()

const routes = Router()


routes.post('/client', clientController.createClient)

//clerk
routes.post('/createUser', clerkController.createUser)
routes.get('/listUser', clerkController.listUser)
routes.get('/loginUser', clerkController.loginUser)

export {routes}