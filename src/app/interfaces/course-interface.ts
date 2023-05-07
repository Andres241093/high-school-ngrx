import { StudentResponse } from "./student-interface";

export interface Course {
    id?: number;
    name: string;
    start_time: string;
    end_time: string;
}

export interface CourseResponse {
    data: Course[];
    pageSize: number;
}