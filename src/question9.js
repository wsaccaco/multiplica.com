let placa = {
  marca: {
    name: 'Honda',
    modelo: {
      name: 'CR-V'
    }

  },
  pais: 'Peru'
};


function getModel({marca = {}}){
  let {modelo = {}} = marca;
  let {name = 'no existe modelo'} = modelo;
  return name;
}

console.log(getModel(placa));