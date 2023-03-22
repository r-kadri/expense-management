import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person: Person =  <Person>{};
  
  constructor(private route: ActivatedRoute, private personService: PersonService) {}
  
  ngOnInit(): void {
    let id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.person = this.personService.getPerson(id);
  }

  get amount(): number {
    return this.personService.totalExpenses(this.person);
  }

  isOver(): boolean {
    return this.person.ceiling < this.amount;
  }
}
