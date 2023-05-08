import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/interfaces/course-interface';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  editCourseForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    start_date: new FormControl<Date | null>(null,[Validators.required]),
    end_date: new FormControl<Date | null>(null,[Validators.required]),
  });

  constructor(private readonly courseService: CourseService, 
    private readonly dialogRef: MatDialogRef<CourseEditComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: Course){}

    ngOnInit(): void {
      this.setData();  
    }

    setData(): void {
      this.editCourseForm.patchValue({
        name: this.data.name,
        start_date: this.data.start_date,
        end_date: this.data.end_date
      });
    }

  close(): void {
    this.dialogRef.close(false);
  }

  save(): void {
    const course: any = {};
    Object.keys(this.editCourseForm.value).forEach(key => {
      course[key] = this.editCourseForm.get(key)?.value;
    });
    this.courseService.edit({
      id: this.data.id,
      ...course
    });
    this.dialogRef.close(true);
  }
}
