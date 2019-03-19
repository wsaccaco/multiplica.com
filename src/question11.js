let people = [
  {
    name: 'Pepe',
    edad: 11,
  },
  {
    name: 'Juan',
    edad: 22,
  },
  {
    name: 'Lalo',
    edad: 33,
  },
];

let exclude = (arr, ...p) => arr.filter(({edad}) => !p.includes(edad));

console.log(exclude(people, 11, 33));