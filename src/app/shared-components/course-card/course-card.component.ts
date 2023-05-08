import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/interfaces/course-interface';
import { CourseDeleteComponent } from 'src/app/pages/course/course-delete/course-delete.component';
import { CourseEditComponent } from 'src/app/pages/course/course-edit/course-edit.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: Course = {} as Course;
  @Output() getDataTable = new EventEmitter<boolean>();

  constructor(private readonly dialog: MatDialog){}

  delete(course: Course){
    this.dialog.open(CourseDeleteComponent,{
      data: course
    })
    .afterClosed()
    .subscribe(res => this.getDataTable.emit(res));
  }

  edit(course: Course){
    this.dialog.open(CourseEditComponent,{
      data: course
    })
    .afterClosed()
    .subscribe(res => this.getDataTable.emit(res));
  }
}
