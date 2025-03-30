// Declaração para adicionar uma extensão à interface Request do Express
declare namespace Express {
  export interface Request {
    user_id: string; // Adiciona a propriedade 'user_id' ao objeto Request
  }
}
