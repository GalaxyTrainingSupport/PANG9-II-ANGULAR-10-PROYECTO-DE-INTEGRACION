import { environment } from 'apps/galaxy/src/environments/environment.prod';
import { IInstructorResponse } from '../interfaces/instructor.interface';
import { IWorkshopResponse } from '../interfaces/workshop.interface';

export class Workshop {
  _id: string;
  instructor: IInstructorResponse;
  name: string;
  description: string;
  date: Date;
  start: number;
  startMeridiem: string;
  end: number;
  endMeridiem: string;
  publish: boolean;
  poster: string;

  constructor(data?: IWorkshopResponse) {
    this._id = data._id ? data._id : '';
    this.instructor = data.instructor ? data.instructor : null;
    this.name = data.name ? data.name : '';
    this.description = data.description ? data.description : '';
    this.date = data.date ? data.date : null;
    this.start = data.start ? data.start : null;
    this.startMeridiem = data.startMeridiem ? data.startMeridiem : '';
    this.end = data.end ? data.end : null;
    this.endMeridiem = data.endMeridiem ? data.endMeridiem : '';
    this.publish = data.publish ? data.publish : false;
    this.poster = data.poster ? `${environment.api}${data.poster}` : null;
  }

  get displayTime(): string {
    return `${this.start} ${this.startMeridiem} a ${this.end} ${this.endMeridiem}`;
  }

  get instructorName(): string {
    return this.instructor ? this.instructor.fullName : 'Aún no asignado';
  }

  get startTime() {
    return `${this.start} ${this.startMeridiem} `
  }

  get endTime() {
    return `${this.end} ${this.endMeridiem} `
  }
}
