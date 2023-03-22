import { Expense } from "./expense";

export interface Person {
  id: number;
  firstname: string;
  lastname: string;
  ceiling: number;
  expenses: Expense[];
}