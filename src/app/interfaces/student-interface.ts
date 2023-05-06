import { Course } from "./course-interface";

export interface Student {
    name: string;
    lastname: string;
    age: number;
    courses?: Course[];
    genre: 'male' | 'female';
}