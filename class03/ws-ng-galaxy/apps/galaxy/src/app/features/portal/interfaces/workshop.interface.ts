import { IInstructorResponse } from './instructor.interface';

export interface IWorkshopResponse {
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
}

