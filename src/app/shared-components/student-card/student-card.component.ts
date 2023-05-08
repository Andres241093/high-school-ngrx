import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentDeleteComponent } from 'src/app/pages/student/student-delete/student-delete.component';
import { StudentEditComponent } from 'src/app/pages/student/student-edit/student-edit.component';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  @Input() student: Student = {} as Student;
  @Output() getStudentData = new EventEmitter<boolean>();
  
  constructor(private readonly dialog: MatDialog, private readonly subscriptionService: SubscriptionService){}

  delete(): void {
    const dialogRef = this.dialog.open(StudentDeleteComponent,{
      data: this.student
    })
    dialogRef.afterClosed().subscribe({
      next: res => this.getStudentData.emit(res)
    });
  }

  edit(): void {
    const dialogRef = this.dialog.open(StudentEditComponent,{
      data: this.student,
      height: 'auto',
      width: '400px',
      disableClose: true
    })
    dialogRef.afterClosed().subscribe({
      next: res => this.getStudentData.emit(res)
    });
  }
}
