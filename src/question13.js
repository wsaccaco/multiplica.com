const defaults = 'agua de jamaica';
const drinks = {
  code1:'limonada',
  code2:'fanta',
  code3:'cerveza',
  code4:'kerosene',
  code5:'gasolina',
  code6:'chicharra',
  code7:'pisco',
  code8:'punto g',
  code9:'ron',
  code10:'leche',
  code11:'quaker',
  code12:'guarana'
};

function getDrink(code){
  let drink = drinks.hasOwnProperty(code) ? drinks[code] : defaults;
  return `estoy tomando ${drink}`
}

console.log(getDrink('code2'));
console.log(getDrink('code20'));