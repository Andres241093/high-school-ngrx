import { StudentResponse } from "./student-interface";

export interface Course {
    id?: number;
    name: string;
    in: string;
    out: string;
}

export interface CourseResponse {
    data: Course[];
    pageSize: number;
}