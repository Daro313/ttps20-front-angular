export class Usuario {

  public id: number;
  public nombre: string;
  public apellido: string;
  public email: string;
  public password: string;
  public tipo: string;

  constructor(id: number,nombre: string,apellido: string,email: string,password: string,tipo: string){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.tipo = tipo;
  }
}
