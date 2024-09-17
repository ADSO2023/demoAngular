import { Component, OnInit } from '@angular/core';
import { DepartamentService } from '../../services/departament.service';
import { Department } from '../../interfaces/departament.interface';


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


}
