import { Component, Input } from '@angular/core';

import { Person } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent {

  //@Input() persons: Person[] = [];
  get persons() {
    // return this.dbzService.persons;
    return this.dbzservice.persons;
  }

  constructor(private dbzservice: DbzService) { }

}
