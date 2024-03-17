import { Request, Response } from 'express';
import clerkClient from '@clerk/clerk-sdk-node';

export class ClerkController {
    async createUser(request: Request, response: Response) {
        try {
            const { emailAddress, password, firstName, lastName, externalId, phoneNumber, username, publicMetadata, privateMetadata, unsafeMetadata } = request.body;

            const user = await clerkClient.users.createUser({
                emailAddress: [emailAddress],
                password: password,
                firstName: firstName,
                lastName: lastName,
                externalId: externalId,
                phoneNumber: phoneNumber,
                username: username,
                publicMetadata: publicMetadata,
                privateMetadata: privateMetadata,
                unsafeMetadata: unsafeMetadata
            });           
            response.status(201).json({ user });
        } catch (error) {            
            console.error('Erro ao criar usuário:', error);
            response.status(500).json({ error: 'Falha na criação do usuário' });
        }
    }

    async listUser(request: Request, response: Response) {
        try {

            const userList = await clerkClient.users.getUserList();


            const simplifiedUserList = userList.map(user => ({
                id: user.id,
                emailAddress: user.emailAddresses
            }));


            response.json(simplifiedUserList);
        } catch (error) {

            console.error('Erro ao obter lista de usuários:', error);
            response.status(500).json({ error: 'Falha ao obter lista de usuários' });
        }
    }
}