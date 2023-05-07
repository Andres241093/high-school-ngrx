import { Injectable } from '@angular/core';
import { Observable, debounceTime, map, of } from 'rxjs';
import { Student, StudentResponse } from '../interfaces/student-interface';
import { STUDENT_LIST } from '../const/student-list';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsList: Observable<StudentResponse> = of({
    data: STUDENT_LIST,
    pageSize: STUDENT_LIST.length
  });

  getAll(pageSize = 8, pageIndex = 1): Observable<StudentResponse> {
    if((pageIndex-1) > 0){
      this.studentsList = of({
        data: STUDENT_LIST.slice((pageIndex - 1)*pageSize, pageIndex*pageSize),
        pageSize: STUDENT_LIST.length
      });
    }else{
      this.studentsList = of({
        data: STUDENT_LIST.slice(0, pageIndex*pageSize),
        pageSize: STUDENT_LIST.length
      });
    }
    return this.studentsList.pipe(debounceTime(3000));
  }

  search(searchValue: string): Observable<Student[]> {
    this.studentsList = of({
      data: STUDENT_LIST,
      pageSize: STUDENT_LIST.length
    });
    return this.studentsList.pipe(
      debounceTime(3000),
      map(student => student.data.filter(value => value.name.toLowerCase() === searchValue.toLowerCase()))
    );
  } 

  save(student: Student): void {
    STUDENT_LIST.push({
      id: STUDENT_LIST.length + 1,
      ...student
    });
  }

  edit(student: Student): void {
    if(student.id){
      STUDENT_LIST[student.id-1] = {
        ...student
      }
    }
  }

  delete(studentId: number): void {
    STUDENT_LIST.splice(studentId, 1);
  }
}
