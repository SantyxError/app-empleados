import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Lista de empleados';

  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 3500),
    new Empleado('Maria', 'Figueroa', 'Directora', 2500),
    new Empleado('Pedro', 'Pascual', 'jefe Seccion', 2000),
    new Empleado('Pablo', 'Gomez', 'Administrativo', 1500),
  ];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleados.push(miEmpleado);
  }
}
