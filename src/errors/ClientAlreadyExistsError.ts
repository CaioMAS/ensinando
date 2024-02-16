import { BaseError } from "./BaseError";


export class ClientAlreadyExistsError extends BaseError {
    constructor(message: string = "Cliente já existe", code: number = 404) {
        super(code, message)
        this.name = "ClientAlreadyExistsError"
    }
}