import { Component } from '@angular/core';
import { MessagesService } from './services/message.service';
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

  constructor(public messagesServices: MessagesService) {
    console.log(this.persons);
    messagesServices.add("Hello from app component");
  }
}
