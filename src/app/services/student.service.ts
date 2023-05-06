import { Injectable } from '@angular/core';
import { Observable, debounceTime, filter, of } from 'rxjs';
import { Student } from '../interfaces/student-interface';
import { STUDENT_LIST } from '../const/student-list';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList: Observable<Student[]> = of(STUDENT_LIST);

  getAll(): Observable<Student[]> {
    return this.studentsList.pipe(debounceTime(3000));
  }

  search(searchValue: string): Observable<Student[]> {
    return this.studentsList.pipe(
      debounceTime(3000),
      filter(student => !!student.find(value => value.name.toLowerCase() === searchValue.toLowerCase()))
    );
  } 
}
