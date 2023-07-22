

class GuitarPlayer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    play() {
        console.log('Rock!');
    }
    sayMyName() {
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}
const richieSambora = new GuitarPlayer('Richie', 'Sambora');
richieSambora.play();
richieSambora.sayMyName();
const jamesHetfield = new GuitarPlayer('James', 'Hetfield');
jamesHetfield.play();
jamesHetfield.sayMyName();









