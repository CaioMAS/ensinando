import { BaseError } from "../errors/BaseError";
import { ClientRepository } from "../repositories/ClientRepository";
import { IClient } from "../types/interfaces/IClient";


export class ClientUseCase {
    async createClient(object: IClient) {
        const clientRepository = new ClientRepository()
        const clientExist = await clientRepository.findClient(object.cpf)

        if(clientExist) {            
            throw new Error('Cliente já existe')            
        }

        

        const client = await clientRepository.createClient(object)
        return client
    }



}