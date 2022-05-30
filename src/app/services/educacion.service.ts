import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../class/educacion';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type':'application/json' } )
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private urlEdu:string = /* 'http://localhost:3000/edus'; */  'http://localhost:8081/edus' ;
 
    constructor(private http:HttpClient) { }

  getEducacion():Observable<Educacion[]> {
    
    return this.http.get<Educacion[]>(this.urlEdu);
  }

  deleteEdu(edu: Educacion): Observable<Educacion> {
    const url = `${this.urlEdu}/${edu.id}`;
    return this.http.delete<Educacion>(url);
  }

  addEdu(edu: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.urlEdu, edu, httpOptions)
  }
}
