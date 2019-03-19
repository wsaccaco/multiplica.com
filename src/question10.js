let users = [
  {
    name: 'YPepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte'],
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira'],
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: [],
  },
];

function fDonation(bool){
  return ({donacion}) => donacion === bool
}

function fWife(quantity, op = '>='){
  return ({esposas}) => {
    switch (op) {
      default:
      case '>=':
        return esposas.length >= quantity;
      case '=':
        return esposas.length === quantity;
      case '<=':
        return esposas.length <= quantity;
    }
  }
}

function fInitialName(intial){
  let regx = new RegExp(`([${intial}])\\w+`);
  return ({name}) => regx.test(name);
}

console.log(
  users
    .filter(fDonation(true))
    .filter(fWife(1))
    .filter(fInitialName('YN'))
    .map(({name}) => name)
);
