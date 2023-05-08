import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { COURSE_LIST } from 'src/app/const/course-list';
import { Course } from 'src/app/interfaces/course-interface';
import { AlertService } from 'src/app/services/alert.service';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit, OnDestroy {
  createStudentForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    courses: new FormControl(''),
    gender: new FormControl('male')
  });

  courseList: Course[] = [];
  pageSize = 0;

  constructor(private readonly courseService: CourseService, 
    private readonly studentService: StudentService, 
    private readonly dialogRef: MatDialogRef<StudentCreateComponent>,
    private readonly subscriptionService: SubscriptionService,
    private readonly alert: AlertService
){}

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList(): void {
    const susbcription = this.courseService.getAll(COURSE_LIST.length)
    .subscribe({
      next: course => {
        this.courseList = course.data;
        this.pageSize = course.pageSize;
      }
    });
    this.subscriptionService.addSubscription(susbcription);
  }

  close(): void {
    this.dialogRef.close(false);
  }

  save(): void {
    const student: any = {};
    Object.keys(this.createStudentForm.value).forEach(key => {
      student[key] = this.createStudentForm.get(key)?.value;
    });
    this.studentService.save(student);
    this.dialogRef.close(true);
    this.alert.show('STUDENT.CREATE.SUCCESS');
  }

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeAll();
  }
}
