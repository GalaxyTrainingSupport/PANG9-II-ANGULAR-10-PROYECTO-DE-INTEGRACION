import { IUser } from '../interfaces';

export enum UserRol {
  STUDENT = 'STUDENT',
  INSTRUCTOR = 'INSTRUCTOR',
  ADMIN = 'ADMIN'
}

interface UserMenuOption {
  icon: string;
  title: string;
  url: string;
  rol: UserRol[];
}

const menuOptions: UserMenuOption[] = [
  { icon: 'folder', title: 'Dashboard', url: '/admin/dashboard', rol: [ UserRol.INSTRUCTOR, UserRol.ADMIN ] },
  { icon: 'folder', title: 'Talleres', url: '/admin/workshops', rol: [ UserRol.INSTRUCTOR, UserRol.ADMIN ] },
  { icon: 'folder', title: 'Instructores', url: '', rol: [ UserRol.ADMIN ] },
  { icon: 'folder', title: 'Configuraciones', url: '', rol: [ UserRol.ADMIN ] },
];

export class User {
  id: string;
  names: string;
  lastNames: string;
  email: string;
  rol: UserRol;

  constructor(data: IUser) {
    this.id = data.id;
    this.names = data.names;
    this.lastNames = data.lastNames;
    this.email = data.email;
    this.rol = data.rol as UserRol;
  }

  get fullName() {
    return `${this.names} ${this.lastNames}`;
  }

  getMenuOptions(): UserMenuOption[] {
    return menuOptions.filter(option => option.rol.includes(this.rol));
  }

}
