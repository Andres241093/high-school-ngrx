import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { COURSE_LIST } from 'src/app/const/course-list';
import { Course } from 'src/app/interfaces/course-interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  pageSize = 0;


  ngOnInit(): void {
    this.getData();
  }

  getData(): void {

  }

  openCreateDialog(): void {

  }

  search(value: string | null): void {
    this.pageSize = 0;
    if(value){
      //..code
    }else {
      this.getData();
    }
  }

  changePage(event: PageEvent): void {
    
  }
}
