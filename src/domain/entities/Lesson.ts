export class Lesson {
  private _id: number;
  private _courseId: number;
  private _title: string;
  private _content?: string;
  private _videoUrl?: string;
  private _orderIndex: number;
  private _duration?: number;

  constructor(id: number, courseId: number, title: string, orderIndex: number, content?: string, videoUrl?: string, duration?: number) {
    if (!title) throw new Error('Le titre de la leçon est requis');
    this._id = id;
    this._courseId = courseId;
    this._title = title;
    this._orderIndex = orderIndex;
    this._content = content;
    this._videoUrl = videoUrl;
    this._duration = duration;
  }

  get id() { return this._id; }
}

