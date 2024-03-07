const { fakerDE } = require('@faker-js/faker');
console.log("Hello, world")

for (let i = 0; i < 10; i++) {
    const { name: plane, iataTypeCode: code} = fakerDE.airline.airplane();
    console.log(plane, code);
}
