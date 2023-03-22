import { Component } from '@angular/core';
import { Datas } from './mock-datas';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-management';

  // create persons test

  persons: Person[] = Datas.getInstance().generatePersons(20);

  constructor() {
    console.log(this.persons);
  }
}
