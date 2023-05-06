import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/interfaces/course-interface';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
  createStudentForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    courses: new FormControl(''),
    gender: new FormControl('male')
  });

  courseList: Course[] = [];
  pageSize = 0;

  constructor(private readonly courseService: CourseService){}

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList(): void {
    this.courseService.getAll()
    .subscribe({
      next: course => {
        this.courseList = course.data;
        this.pageSize = course.pageSize;
      }
    });
  }

  save(): void {
    console.log(this.createStudentForm.value);
  }
}
