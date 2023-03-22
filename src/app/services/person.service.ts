import { Injectable } from '@angular/core';
import { Expense } from '../expense';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(public persons = []) { }

  getPersonnes(sort: number = 0): Person[] {
    return this.tri([...this.persons], sort)
  }

  tri(persons: Person[], sort: number): Person[] {
    if(sort === 1) {
      return persons.sort((p1, p2) => p1.lastname.localeCompare(p2.lastname));
    } else if(sort === -1) {
      return persons.sort((p1, p2) => p2.lastname.localeCompare(p1.lastname));
    } else {
      return persons.sort((p1, p2) => p1.id - p2.id);
    }
  }

  totalExpenses(person: Person): number {
    const expenses = person.expenses;
    return expenses.reduce((cumul: number, expense: Expense) => cumul += expense.amount, 0);
  }
}
