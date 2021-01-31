export interface Usuario {

   userId?: number;
   nombre: string;
   apellido: string;
   email: string;
   password: string;
   rol: string;
   token?: string;
/*
  constructor(id: number,nombre: string,apellido: string,email: string,password: string,tipo: string){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.rol = rol;
  }*/
}
