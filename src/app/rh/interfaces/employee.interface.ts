import { Department } from "./departament.interface";

export interface Employee {
  idEmpleado:     number;
  nombreEmpleado: string;
  departamento:   Department;
  sueldoEmpleado: number;
  imagenUrl : string;
  descripcion: string;
  habilidades: string;
  imgAlternative ?: string;
}

