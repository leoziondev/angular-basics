import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1 class="mb-20">{{ title }}</h1>

    <h3 class="mb-20">La base es: <strong>{{ base }}</strong></h3>

    <button (click)="counter(base)">+ {{ base }}</button>
    <span>{{ num }}</span>
    <button (click)="counter(-base)">- {{ base }}</button>
  `
})

export class CounterComponent {
  title:string = 'Contador App';
  num: number = 10;
  base:number = 5;

  counter( valor:number ) {
    this.num += valor;
  }
}
