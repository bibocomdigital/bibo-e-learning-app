import { EnrollmentStatus } from "@types";

export class Enrollment {
  private _userId: number;
  private _courseId: number;
  private _enrollmentDate: Date;
  private _progressPercentage: number;
  private _status: EnrollmentStatus;
  private _completionDate?: Date;

  constructor(userId: number, courseId: number) {
    this._userId = userId;
    this._courseId = courseId;
    this._enrollmentDate = new Date();
    this._progressPercentage = 0;
    this._status = EnrollmentStatus.active;
  }

  complete(progressPercentage: number = 100) {
    this._progressPercentage = progressPercentage;
    this._status = EnrollmentStatus.completed;
    this._completionDate = new Date();
  }

  drop() {
    this._status = EnrollmentStatus.dropped;
  }

  get status() { return this._status; }
}
