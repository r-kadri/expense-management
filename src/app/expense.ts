export interface Expense {
    id: number;
    person_id: number;
    dd: Date;
    nature: string;
    label: string;
    amount: number;
}