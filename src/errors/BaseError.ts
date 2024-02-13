

export class BaseError extends Error {
    code: number
    message: string

    constructor(code: number = 400, message: string) {
        super()

        this.code = code
        this.message = message
    }
}

