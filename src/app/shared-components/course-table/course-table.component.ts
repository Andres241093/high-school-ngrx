import { Component, Input, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/interfaces/course-interface';
import { CourseDeleteComponent } from 'src/app/pages/course/course-delete/course-delete.component';
import { CourseEditComponent } from 'src/app/pages/course/course-edit/course-edit.component';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss']
})
export class CourseTableComponent {
  @Input() dataSource: MatTableDataSource<Course> = new MatTableDataSource([] as Course[]);
  @Output() getDataTable = new EventEmitter<boolean>();
  displayedColumns = ['id','name','start_time','end_time','options'];

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
