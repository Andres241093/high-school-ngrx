import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { STUDENT_LIST } from 'src/app/const/student-list';
import { Student } from 'src/app/interfaces/student-interface';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.scss']
})
export class StudentDeleteComponent {

  constructor(private readonly dialogRef: MatDialogRef<StudentDeleteComponent>,
    private readonly studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public readonly data: Student){}

  close(): void {
    this.dialogRef.close(false);
  }

  delete(): void {
    const index = STUDENT_LIST.indexOf(this.data)
    this.studentService.delete(index);
    this.dialogRef.close(true);
  }
}
