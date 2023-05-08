import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/interfaces/course-interface';
import { Student } from 'src/app/interfaces/student-interface';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit, OnDestroy {
  editStudentForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    age: new FormControl(0,[Validators.required]),
    courses: new FormControl({}),
    gender: new FormControl('male')
  });

  courseList: Course[] = [];
  pageSize = 0;

  constructor(private readonly courseService: CourseService, 
    private readonly studentService: StudentService, 
    private readonly dialogRef: MatDialogRef<StudentEditComponent>,
    private readonly subscriptionService: SubscriptionService,
    @Inject(MAT_DIALOG_DATA) private readonly data: Student){}

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList(): void {
    const susbcription = this.courseService.getAll()
    .subscribe({
      next: course => {
        this.courseList = course.data;
        this.pageSize = course.pageSize;
        this.setData();
      }
    });
    this.subscriptionService.addSubscription(susbcription);
  }

  setData(): void {
    this.editStudentForm.patchValue({
      name: this.data.name,
      lastname: this.data.lastname,
      age: this.data.age,
      courses: this.data.courses,
      gender: this.data.gender
    });
  }

  compareWith(course1: Course, course2: Course) {
    return course1 && course2 && course1.id === course2.id;
  }

  isChecked(gender: string): boolean {
    return this.data.gender === gender;
  }

  close(): void {
    this.dialogRef.close(false);
  }

  save(): void {
    const student: any = {};
    Object.keys(this.editStudentForm.value).forEach(key => {
      student[key] = this.editStudentForm.get(key)?.value;
    });
    this.studentService.edit({
      id: this.data.id,
      ...student
    });
    this.dialogRef.close(true);
  }

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeAll();
  }
}