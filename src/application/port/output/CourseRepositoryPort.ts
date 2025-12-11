import { Course } from "@domain";

export interface CourseRepositoryPort {
    getAll(): Promise<Course[]>;
    getByStudentId(studentId: string): Promise<Course[]>;
}

