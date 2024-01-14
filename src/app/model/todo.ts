import { PartialObserver } from 'rxjs';

export class Todo {
  constructor(initData?: PartialObserver<Todo>) {
    Object.assign(this.initData);
    if (this.hasFinished === undefined) {
      this.hasFinished = false;
    }
  }
  id!: number;
  content!: string;
  hasFinished!: boolean;

  finishDate?: Date;
  setFinished(finishDate: Date): void {
    this.hasFinished = true;
    this.finishDate = finishDate;
  }
}
