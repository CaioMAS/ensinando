import { Request, Response } from "express";
import { ClientUseCase } from "../use-case/ClientUseCase";
import { ClientAlreadyExistsError } from "../errors/ClientAlreadyExistsError";


export class ClientController {
    async createClient(request: Request, response: Response) {
        const {
            cpf,
            name,
            age,
            address
        } = request.body

        const clientUseCase = new ClientUseCase()

        try {
            const result = await clientUseCase.createClient({
                cpf,
                name,
                age,
                address
            })

            return response.json(result)
        } catch (error: any) {
            
            console.log(error instanceof ClientAlreadyExistsError)
            console.log("Tipo de erro:", error.constructor.name);
            if (error instanceof ClientAlreadyExistsError) {
                return response.status(404).json({ error: "Cliente já existe" })
            } else {
                return response.status(500).json({ error: "Erro Interno do Servidor" })
            }
        }

    }

}