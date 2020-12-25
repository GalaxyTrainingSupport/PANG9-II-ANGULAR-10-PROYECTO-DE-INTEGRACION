import { IUser } from '../interfaces/user.interface';

export class User {
  email: string;
  id: string;
  names: string;
  lastNames: string;
  rol: string;
  iat: number;
  exp: number;

  constructor(data?: IUser){
    this.email = data.email ? data.email : null;
    this.id = data.id ? data.id : null;
    this.names = data.names ? data.names : null;
    this.lastNames = data.lastNames ? data.lastNames : null;
    this.rol = data.rol ? data.rol : null;
    this.iat = data.iat ? data.iat : null;
    this.exp = data.exp ? data.exp : null;
  }
}
