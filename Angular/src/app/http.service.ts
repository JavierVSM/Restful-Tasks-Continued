import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getTaskbyId('61b00af65e6c3d8fadbb5bcf');
  }
  
  getTasks(){
    return this._http.get('http://localhost:8080/tasks');
  }

  getTaskbyId(id: any) {
    let url= id;
    return this._http.get('http://localhost:8080/tasks/'+url);
  }
}
