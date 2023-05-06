import { Course } from "./course-interface";

export interface Student {
    id?: number;
    name: string;
    lastname: string;
    age: number;
    courses?: Course[];
    gender: 'male' | 'female';
}

export interface StudentResponse {
    data: Student[];
    pageSize: number;
}