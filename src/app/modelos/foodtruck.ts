import { Usuario } from "./usuario";
import { TipoDeServicio } from "./tipoDeServicio";
import { ImagenFt } from "./imagenFt";
import { Puntaje } from "./puntaje";
import { Ubicacion } from "./ubicacion";

export class Foodtruck {
  constructor(
    id?: number,
    nombre: string,
    descripcion: string,
    url: string,
    whatsapp: string,
    instagram: string,
    twitter: string,
    foodtrucker?: any,
    servicios?: TipoDeServicio[],
    ubicacion?: Ubicacion,
    imagenes?: ImagenFt[],
    puntajes?: Puntaje[],
  ){}



/*
  static adapt(item:any): Foodtruck {
    return new Foodtruck (
      item.id,
      item.nombre,
      item.descripcion,
      item.url,
      item.whatsapp,
      item.instagram,
      item.twitter,
      new Foodtrucker(item.foodtrucker),
      new Servicio(item.servicios),
      new Ubicacion(item.ubicacion),
      new ImagenFt(item.imagenes),
      new Puntaje(item.puntajes),
    );
  }*/
}
