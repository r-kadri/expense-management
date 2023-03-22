import {faker} from '@faker-js/faker';
import {Person} from './person';

export class Datas {
    private static instance: Datas;
    private static idP = 1;
    private static idD = 1;

    private constructor() {
    }

    public static getInstance(): Datas {
        if (Datas.instance === undefined) {
            Datas.instance = new Datas();
        }
        return Datas.instance;
    }

    public generatePersons(nb?: number): Person[] {
        const persons = [];
        // faker.setLocale('fr');
        if (!nb)
            nb = 10;
        for (let i = 0; i < nb; i++) {
            let person_id = Datas.idP++;
            const nbExpenses = faker.datatype.number({min: 10, max: 20});
            const listExps = [];
            for (let j = 0; j < nbExpenses; j++) {
                const dep = {
                    nature: faker.helpers.arrayElement(['Alimentaire', 'Loisirs', 'Voiture', 'Habitat', 'Sport', 'Vacances']),
                    dd: faker.date.between('2019-01-01', '2019-12-31'),
                    label: faker.hacker.phrase(),
                    amount: +faker.finance.amount(100, 750, 2),
                    id: Datas.idD++,
                    person_id: person_id,
                };
                listExps.push(dep);
            }
            const person = {
                id: person_id,
                firstname: faker.name.firstName(),
                lastname: faker.name.lastName(),
                ceiling: +faker.finance.amount(5000, 10000, 2),
                expenses: listExps
            };
            persons.push(person);
        }
        return persons;
    }
}