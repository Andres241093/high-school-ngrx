import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/interfaces/course-interface';
import { CourseService } from 'src/app/services/course.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { CourseCreateComponent } from '../course-create/course-create.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {
  pageSize = 0;
  searchValue: string | null = null;
  dataTable: MatTableDataSource<Course> = new MatTableDataSource([] as Course[]);

  constructor(private readonly courseService: CourseService, 
    private readonly subscriptionService: SubscriptionService,
    private readonly dialog: MatDialog){}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const subscription = this.courseService.getAll()
    .subscribe({
      next: courses => {
        this.dataTable = new MatTableDataSource(courses.data);
        this.pageSize = courses.pageSize;
      }
    });
    this.subscriptionService.addSubscription(subscription);
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CourseCreateComponent, {
      height: 'auto',
      width: '400px',
      disableClose: true
    });
    dialogRef
    .afterClosed()
    .subscribe({
      next: res => {
        this.isGettingData(res);
      }
    });
  }

  search(value: string | null): void {
    this.pageSize = 0;
    this.searchValue = value;
    if(value){
      const subscription = this.courseService.search(value)
      .subscribe({
        next: courses => this.dataTable = new MatTableDataSource(courses)
      });
      this.subscriptionService.addSubscription(subscription);
    }else{
      this.getData();
    }
  }

  isGettingData(value: boolean): void {
    if(value){
      this.getData();
    }
  }

  changePage(event: PageEvent): void {
    const subscription = this.courseService.getAll(event.pageSize,event.pageIndex+1)
    .subscribe({
      next: courses => {
        this.dataTable = new MatTableDataSource(courses.data)
        this.pageSize = courses.pageSize;
      }
    });
    this.subscriptionService.addSubscription(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeAll();
  }
}
