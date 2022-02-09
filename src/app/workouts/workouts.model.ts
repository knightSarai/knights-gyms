export class Workout {
  public id: number;
  public name: string;
  public date: Date
  public details: string;

  constructor(id: number, name: string, date: Date, details: string) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.details = details;
  }
}
