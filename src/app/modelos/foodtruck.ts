export class Foodtruck {
  public id: number;
  public nombre: string;
  public descripcion: string;
  public url: string;
  public whatsapp: string;
  public instagram: string;
  public twitter: string;

  constructor(id: number, nombre: string, descripcion: string, url: string,
        whatsapp: string, instagram: string, twitter: string) {
          this.id = id;
          this.nombre = nombre;
          this.descripcion = descripcion;
          this.url = url;
          this.whatsapp = whatsapp;
          this.instagram = instagram;
          this.twitter = twitter;
        }

}
