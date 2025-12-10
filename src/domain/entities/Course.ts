import { CourseLevel, CourseStatus } from "@types";


export class Course {
  private _id: number;
  private _title: string;
  private _description?: string;
  private _instructorId: number;
  private _categoryId?: number;
  private _price: number;
  private _duration?: number;
  private _level: CourseLevel;
  private _status: CourseStatus;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: number,
    title: string,
    instructorId: number,
    price: number = 0,
    level: CourseLevel,
    status: CourseStatus,
    description?: string,
    categoryId?: number,
    duration?: number,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    if (!title) throw new Error('Le titre est requis');
    if (price < 0) throw new Error('Le prix ne peut pas être négatif');

    this._id = id;
    this._title = title;
    this._instructorId = instructorId;
    this._price = price;
    this._level = level;
    this._status = status;
    this._description = description;
    this._categoryId = categoryId;
    this._duration = duration;
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
  }

  get id() { return this._id; }
  get title() { return this._title; }
  get status() { return this._status; }

  publish() {
    if (this._status === CourseStatus.draft) this._status = CourseStatus.published;
    this._updatedAt = new Date();
  }

  archive() {
    this._status = CourseStatus.archived;
    this._updatedAt = new Date();
  }
}
