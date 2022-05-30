import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../class/job';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-Type':'application/json' } )
}

@Injectable({
  providedIn: 'root'
})
export class JobServService {

  //Cambiar al puerto que corresponda al backend
  urlJob:string = /* 'http://localhost:3000/jobs'; */  'http://localhost:8081/jobs' ;
  

  constructor(private http:HttpClient) { }

  getJobs():Observable<Job[]> {

    return this.http.get<Job[]>(this.urlJob);
  }

  deleteJob(job: Job): Observable<Job> {
    const url = `${this.urlJob}/${job.id}`;
    return this.http.delete<Job>(url);
  }  

  addJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.urlJob, job, httpOptions);
  }  
}
