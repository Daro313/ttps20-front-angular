import { Usuario } from "./usuario";
import { TipoDeServicio } from "./tipoDeServicio";

export interface Foodtruck {
  ftId?: number;
  nombre: string;
  descripcion: string;
  url: string;
  whatsapp: string;
  instagram: string;
  twitter: string;
  foodtrucker?: any;
  servicios?: TipoDeServicio[];
  ubicacion?: string;
  reserva?: string;
  puntaje?: string;
}
