import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../interfaces/dbz.interface';
import { PersonsComponent } from '../persons/persons.component';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html'
})

export class AddPersonComponent {

  @Input() newPerson: Person = {
    name: '',
    power: 0
  }

  constructor(private dbzservice: DbzService) { }

  // @Output() onNewPerson: EventEmitter<Person> = new EventEmitter();

  add() {
    if (this.newPerson.name.trim().length === 0) { return; }

    // console.log(this.newPerson);
    // this.onNewPerson.emit(this.newPerson);
    this.dbzservice.addPerson(this.newPerson);

    this.newPerson = {
      name: '',
      power: 0
    }

  }
}
// export class AddPersonComponent extends PersonsComponent {

//   @Input() newPerson: Person = {
//     name: '',
//     power: 0
//   }

//   add() {
//     if (this.newPerson.name.trim().length === 0) { return; }

//     console.log(this.newPerson)

//     this.persons.push(this.newPerson);
//     this.newPerson = {
//       name: '',
//       power: 0
//     }

//     console.log(this.persons);
//   }
// }
