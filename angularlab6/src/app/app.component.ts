import { Component } from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService){}
  students: any = [];

ngOnInit(){
  this.dataService.GetStudentData().subscribe(data =>
  {
    this.students = data.students;
  
  });


