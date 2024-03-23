
const object = {
    number1: 5,
    number2: 15,
    add: function() {
        const newNumber = this.number1 + this.number2;
        return newNumber;
    }
}

console.log(object);
console.log(object.add());