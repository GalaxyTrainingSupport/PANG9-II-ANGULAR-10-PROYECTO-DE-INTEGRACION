import { IInstructorResponse } from '../interfaces/instructor.interface';

export class Instructor {
  id: string;
  fullName: string;
  mail: string;

  constructor(data?: IInstructorResponse) {
    this.id = data ? data._id : '';
    this.fullName = data.fullName ? data.fullName : '';
    this.mail = data.mail ? data.mail : '';
  }
}
