var arrPersonas = [
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira']
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: []
  }
];

function getItem(index){
  return Object.assign({}, arrPersonas[index]);
}

let item = getItem(5);
item.name = 'choy';

console.log({item});
console.log({arrPersonas});