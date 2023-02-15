//import { STATUS_CODES } from "http"


export class ApiError extends Error {
  public readonly statusCode: number;
   
    constructor(message: string, statusCode: number) { 
    super(message);
    this.statusCode = statusCode;
                
  }
}

//bad request herda apierror

export class BadRequestError extends ApiError {
  
<<<<<<< HEAD
  constructor(message = 'Bad request: Requisição inválida' ) {
=======
  constructor(message = 'Servidor Não funciona' ) {
>>>>>>> 81ea340 (update: middleware de erro)
    super(message, 400);
   }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, 404);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}
