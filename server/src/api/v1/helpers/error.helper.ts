export class AppError extends Error {
    public readonly statusCode: number;
    public readonly status: string;
    public readonly type: string;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode: number, name: string, type: string) {
        super(message);

        this.statusCode = statusCode || 500;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.name = name;
        this.type = type;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}