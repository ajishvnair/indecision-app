/*console.log('from arrow functions');
let fullname="Ajish V Nair";

const firstName= (x) => x.split(' ')[0];

console.log(firstName(fullname));

const square = (x) => x*x;

console.log(square(4));*/

//map

const multiplier ={
    numbers:[1,2,3],
    multyplyBy:2,
    multiply() {
        return this.numbers.map((number) => this.multyplyBy*number);
    }
}
console.log(multiplier.multiply());