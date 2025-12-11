import { Course } from "@domain";
import { InputPort, CourseRepositoryPort } from "application/port";

export class GetAllCoursesUseCase implements InputPort<void, Course[]> {
    constructor(private courseRepositoryPort: CourseRepositoryPort) {}

    execute(): Promise<Course[]> {
        return this.courseRepositoryPort.getAll();
    }
}