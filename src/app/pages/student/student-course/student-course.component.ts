import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/interfaces/course-interface';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.scss']
})
export class StudentCourseComponent implements OnInit {
  dataSource: MatTableDataSource<Course> = new MatTableDataSource([] as Course[]);
  displayedColumns = ['id','name','start_time','end_time'];
  studentId = 0;
  student: Student = {} as Student;
  constructor(private readonly sudentService: StudentService,
    private readonly activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: res => this.studentId = res['id']
    });
    this.getStudentData(this.studentId);
  }

  getStudentData(studentId: number): void{
    this.sudentService.getStudent(studentId)
    .subscribe({
      next: res => {
        if(res){
          this.student = res;
          this.dataSource = new MatTableDataSource(this.student.courses);
        }
      }
    });
  }
}
