import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks: any[] = [];
  taskDetail: any = {};

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.getTasksFromService();
    this.getTasksByID();
  }
  
  getTasksFromService(){
        this._httpService.getTasks()
        .subscribe((data:any)=>{
          this.tasks = data;          
        });
  }

  getTasksByID(){
    let id='61b00af65e6c3d8fadbb5bcf';
    this._httpService.getTaskbyId(id)
    .subscribe((data:any)=>{
      this.taskDetail = data;   
      console.log ("EEEEEEE",this.taskDetail);       
    });
  }
}
