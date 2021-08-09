import { Injectable } from "@angular/core";
import { Person } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

  private _persons: Person[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 8500
    }
  ];

  get persons(): Person[] {
    return [...this._persons];
  }

  constructor() { }

  addPerson(person: Person) {
    this._persons.push(person);
  }

}
