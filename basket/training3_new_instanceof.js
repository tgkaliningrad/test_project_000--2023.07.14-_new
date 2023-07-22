

class Cook {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tool = 'knife';
    }
    cut() {
        console.log('Cut food');
    }
}
const developer = {
    firstName: 'Dan',
    lastName: 'Abramov',
    tool: 'React',
    code: () => { },
};
const gordonRamsay = new Cook('Gordon', 'Ramsay');
console.log(gordonRamsay);
console.log(gordonRamsay instanceof Cook);
console.log(developer instanceof Cook);







