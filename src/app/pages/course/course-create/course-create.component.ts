import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent {
  createCourseForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    start_date: new FormControl<Date | null>(null,[Validators.required]),
    end_date: new FormControl<Date | null>(null,[Validators.required]),
  });

  constructor(private readonly courseService: CourseService, 
    private readonly alert: AlertService,
    private readonly dialogRef: MatDialogRef<CourseCreateComponent>){}

  close(): void {
    this.dialogRef.close(false);
  }

  save(): void {
    const course: any = {};
    Object.keys(this.createCourseForm.value).forEach(key => {
      course[key] = this.createCourseForm.get(key)?.value;
    });
    this.courseService.save(course);
    this.dialogRef.close(true);
    this.alert.show('COURSE.CREATE.SUCCESS');
  }
}
