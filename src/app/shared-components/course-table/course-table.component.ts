import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { COURSE_LIST } from 'src/app/const/course-list';
import { Course } from 'src/app/interfaces/course-interface';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss']
})
export class CourseTableComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Course> = new MatTableDataSource(COURSE_LIST);
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  displayedColumns = ['id','name','start_time','end_time','options'];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
