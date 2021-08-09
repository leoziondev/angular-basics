import { Component } from '@angular/core';

import { Person } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  newPerson: Person = {
    name: 'Maestro Roshi',
    power: 1000
  }


  // addNewPerson(arg: Person) {
  //   this.persons.push(arg);
  // }

  // constructor(private dbzservice: DbzService) { }
}
