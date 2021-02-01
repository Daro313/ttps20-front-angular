import { Usuario } from "./usuario";
export interface Foodtruck {
  ftId?: number;
  nombre: string;
  descripcion: string;
  url: string;
  whatsapp: string;
  instagram: string;
  twitter: string;
  foodtrucker?: any;
  servicios?: string;
  ubicacion?: string;
  reserva?: string;
  puntaje?: string;
}
