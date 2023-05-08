import { Injectable } from '@angular/core';
import { COURSE_LIST } from '../const/course-list';
import { Course, CourseResponse } from '../interfaces/course-interface';
import { Observable, debounceTime, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseList: Observable<CourseResponse> = of({
    data: COURSE_LIST,
    pageSize: COURSE_LIST.length
  });

  getAll(pageSize = 8, pageIndex = 1): Observable<CourseResponse> {
    if((pageIndex-1) > 0){
      this.courseList = of({
        data: COURSE_LIST.slice((pageIndex - 1)*pageSize, pageIndex*pageSize),
        pageSize: COURSE_LIST.length
      });
    }else{
      this.courseList = of({
        data: COURSE_LIST.slice(0, pageIndex*pageSize),
        pageSize: COURSE_LIST.length
      });
    }
    return this.courseList.pipe(debounceTime(3000));
  }

  search(searchValue: string): Observable<Course[]> {
    this.courseList = of({
      data: COURSE_LIST,
      pageSize: COURSE_LIST.length
    });
    return this.courseList.pipe(
      debounceTime(3000),
      map(student => student.data.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase())))
    );
  } 

  save(course: Course): void {
    COURSE_LIST.push({
      id: COURSE_LIST.length + 1,
      ...course
    });
  }

  edit(course: Course): void {
    if(course.id){
      COURSE_LIST[course.id-1] = {
        ...course
      }
    }
  }

  delete(courseId: number): void {
    COURSE_LIST.splice(courseId, 1);
  }
}