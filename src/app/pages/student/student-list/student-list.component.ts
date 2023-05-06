import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentService } from 'src/app/services/student.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnDestroy {
  studentList: Student[] = [];

  constructor(private readonly studentService: StudentService, private readonly subscriptionService: SubscriptionService){}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const subscription1 = this.studentService.getAll()
    .subscribe({
      next: students => this.studentList = students
    });
    this.subscriptionService.addSubscription(subscription1);
  }

  search(value: string | null): void {
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

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeAll();
  }
}
