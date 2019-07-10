import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { data } from './model/data.model';


@Injectable({
  providedIn: 'root'
})
export class DataapiService {



  constructor(private http: HttpClient) { }




  getuserinfo() {
  


    return this.http.get<data>('https://reqres.in/api/users?page=2' ) ;
  }
  

  }

  

