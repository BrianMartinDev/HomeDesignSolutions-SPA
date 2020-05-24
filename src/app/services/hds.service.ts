import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HdsService {


  private endpoint = " http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) {
    
  }

  // GETM ALL FLIGHTS
  getAllData(): Observable<any> {
    return this.http.get(this.endpoint);
  }
}
