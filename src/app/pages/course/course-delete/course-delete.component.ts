import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { COURSE_LIST } from 'src/app/const/course-list';
import { Course } from 'src/app/interfaces/course-interface';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.scss']
})
export class CourseDeleteComponent {
  constructor(private readonly dialogRef: MatDialogRef<CourseDeleteComponent>,
    private readonly courseService: CourseService,
    @Inject(MAT_DIALOG_DATA) public readonly data: Course){}

  close(): void {
    this.dialogRef.close(false);
  }

  delete(): void {
    const index = COURSE_LIST.indexOf(this.data)
    this.courseService.delete(index);
    this.dialogRef.close(true);
  }
}
