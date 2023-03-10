import { Component, OnInit } from '@angular/core';
import { Student } from '../configuration';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  students!: Student[];

  constructor(private studentsService: StudentsService){}

  ngOnInit():void {
    // this.students = this.studentsService.students;
    this.studentsService.getStudents().subscribe(data => {
      console.log(data);
      this.students = Object.values(data);
      this.studentsService.setStudents(this.students);
    })
  }

  help() {
    const helpWindow = document.getElementById("help-window");
    helpWindow?.classList.toggle("translate")
  }
}
