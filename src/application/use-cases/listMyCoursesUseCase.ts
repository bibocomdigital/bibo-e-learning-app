import { Course } from "@domain";
import { InputPort, CourseRepositoryPort } from "application/port";

export class ListMyCoursesUseCase implements InputPort<string, Course[]> {
    constructor(private courseRepositoryPort: CourseRepositoryPort) {}

    execute(studentId: string): Promise<Course[]> {
        return this.courseRepositoryPort.getByStudentId(studentId);
    }
}