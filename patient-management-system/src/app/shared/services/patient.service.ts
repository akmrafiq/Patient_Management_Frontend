import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";
import { Patient } from '../models/Patient';
import { IPaginatedItem, IPagination, PaginatedItem } from '../models/Pagination';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService {
  patientServiceUrl: string;

  constructor(private http: HttpClient) {
    super();
    this.patientServiceUrl = `${this.baseUrl}/Patient`;
  }

  get(): Observable<any> {
    return this.http.get<any>(`${this.patientServiceUrl}`);
  }

  create(model: any): Observable<any> {
    return this.http.post(`${this.patientServiceUrl}`, model);
  }

  getById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}${this.patientServiceUrl}/${id}`);
  }

  onUpdate(id: any, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.patientServiceUrl}/${id}`, value);
  }
}
