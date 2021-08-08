import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes: string[] = ['Iroman', 'Spiderman', 'Thor', 'Hulk'];
  heroeDel: string = '';

  delHeroe() {
    this.heroeDel = this.heroes.shift() || '';
  }

}
