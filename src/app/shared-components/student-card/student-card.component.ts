import { Component, Input } from '@angular/core';
import { Student } from 'src/app/interfaces/student-interface';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  @Input() student: Student = {} as Student;
}
