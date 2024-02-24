import { Request, Response } from "express";
import { ClientUseCase } from "../use-case/ClientUseCase";


export class ClientController {
    async createClient(request: Request, response: Response) {
        const {
            cpf,
            name,
            age,
            address
        } = request.body

        const clientUseCase = new ClientUseCase()

        const result = await clientUseCase.createClient({
            cpf,
            name,
            age,
            address
        })

        return response.json(result)

    }

}