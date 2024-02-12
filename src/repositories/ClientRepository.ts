import { prisma } from "../service/database";
import { IClient } from "../types/interfaces/IClient";



export class ClientRepository{
    async findClient(cpf: string) {
        const clientExit = await prisma.client.findFirst({
            where: {
                cpf: {
                    equals: cpf
                }
            }
        })

        return clientExit
    }

    async createClient({
        cpf,
        name,
        age,
        address
    }: IClient) {
        const client = await prisma.client.create({
            data: {
                address,
                age,
                cpf,
                name
            }
        })

        return client
    }
    
}