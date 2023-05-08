import { StudentResponse } from "./student-interface";

export interface Course {
    id?: number;
    name: string;
    start_date: Date;
    end_date: Date;
}

export interface CourseResponse {
    data: Course[];
    pageSize: number;
}