import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Department } from '../interfaces/departament.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private apiUrl: string = environments.baseURL; // La URL API

  constructor(private http: HttpClient) {}


  getDepartamentos(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl + '/departamentos');
  }
}
