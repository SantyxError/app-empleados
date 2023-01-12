import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 3500),
    new Empleado('Maria', 'Figueroa', 'Directora', 2500),
    new Empleado('Pedro', 'Pascual', 'jefe Seccion', 2000),
    new Empleado('Pablo', 'Gomez', 'Administrativo', 1500),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va a agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario: ' +
        empleado.salario
    );
    this.empleados.push(empleado);
  }
}
