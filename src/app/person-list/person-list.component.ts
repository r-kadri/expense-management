import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = []
  icons: string[] = ['arrow_forward', 'arrow_downward', 'arrow_upward'];
  columns = ['id', 'lastname', 'firstname', 'ceiling'];
  sort: number = 0;


  ngOnInit(): void {
    this.persons = this.personsService.getPersons();
  }

  constructor(private personsService: PersonService) {

  }

  setSort() {
    this.sort = (this.sort + 1) % 3;
    console.log(this.persons);
    this.persons = this.personsService.getPersons(this.sort);
  }
}
