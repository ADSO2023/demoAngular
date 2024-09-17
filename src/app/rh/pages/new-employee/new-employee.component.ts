import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../../services/departament.service';
import { Department } from '../../interfaces/departament.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Department } from './../../interfaces/departament.interface';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.scss'
})
export class NewEmployeeComponent implements OnInit {

  public departaments : Department[] = [];

  constructor(private departamentService: DepartamentService){}

  ngOnInit(): void {
      this.departamentService.getDepartamentos()
      .subscribe(rta => this.departaments = rta);
  }

  public formEmployee = new FormGroup({
    idEmpleadonew:    new FormControl(),
    nombreEmpleado:   new FormControl<string>(''),
    departamento:     new FormControl(this.departaments),
    sueldoEmpleado:   new FormControl<number>(0),
    imagenUrl:        new FormControl<string>(''),
    descripcion:      new FormControl<string>(''),
    habilidades:      new FormControl<string>(''),
    imgAlternative:   new FormControl<string>('')
  });

  onSumit(){
    console.log(this.formEmployee.value);

  }

}
