import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentService } from 'src/app/services/student.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { StudentCreateComponent } from '../student-create/student-create.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {
  studentList: Student[] = [];
  pageSize = 0;

  constructor(public readonly dialog: MatDialog, private readonly studentService: StudentService, private readonly subscriptionService: SubscriptionService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const subscription1 = this.studentService.getAll()
    .subscribe({
      next: students => {
        this.studentList = students.data;
        this.pageSize = students.pageSize;
      }
    });
    this.subscriptionService.addSubscription(subscription1);
  }

  openCreateDialog(): void {
    this.dialog.open(StudentCreateComponent, {
      height: 'auto',
      width: '50vw',
      disableClose: true
    });
  }

  search(value: string | null): void {
    this.pageSize = 0;
    if(value){
      const subscription2 = this.studentService.search(value)
      .subscribe({
        next: students => this.studentList = students
      });
      this.subscriptionService.addSubscription(subscription2);
    }else {
      this.getData();
    }
  }

  changePage(event: PageEvent): void {
    const subscription3 = this.studentService.getAll(event.pageSize,event.pageIndex+1)
    .subscribe({
      next: students => {
        this.studentList = students.data;
        this.pageSize = students.pageSize;
      }
    });
    this.subscriptionService.addSubscription(subscription3);
  }

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeAll();
  }
}
