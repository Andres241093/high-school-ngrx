import { Student } from "../interfaces/student-interface";

export const STUDENT_LIST: Student[] = [
    {
      id: 1,
      name: 'Andres',
      lastname: 'Ucero',
      age: 29,
      gender: 'male',
      courses: [
        {
          id: 1,
          name: 'Math',
          start_date: new Date(2023, 1, 12),
          end_date: new Date(2023, 1, 13)
        },
        {
            id: 2,
            name: 'Marketing',
            start_date: new Date(2023, 2, 12),
            end_date: new Date(2023, 2, 13)
        },
        {
          id: 5,
          name: 'Personal finance',
          start_date: new Date(2023, 5, 12),
          end_date: new Date(2023, 5, 13)
        }  
      ]
    },
    {
      id: 2,
      name: 'Maria',
      lastname: 'Villanueva',
      age: 25,
      gender: 'female'
    },
    {
      id: 3,
      name: "Vicki",
      lastname: "Barr",
      gender: "female",
      age: 28
    },
    {
      id: 4,
      name: "Griffith",
      lastname: "Cote",
      gender: "male",
      age: 29
    },
    {
      id: 5,
      name: "Cannon",
      lastname: "Bray",
      gender: "male",
      age: 24
    },
    {
      id: 6,
      name: "Hill",
      lastname: "Glass",
      gender: "male",
      age: 18
    },
    {
      id: 7,
      name: "Melisa",
      lastname: "Cain",
      gender: "female",
      age: 19
    },
    {
      id: 8,
      name: "Celia",
      lastname: "Wall",
      gender: "female",
      age: 19
    },
    {
      id: 9,
      name: "Marjorie",
      lastname: "Moran",
      gender: "female",
      age: 29
    }
  ];