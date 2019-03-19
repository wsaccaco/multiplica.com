function getPlaca(nroPlaca) {
  return new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearInterval(id);
      resolve({
        pais: 'Peru',
        dniConductor: '54452341',
      });
    }, Math.random() * 100);

  });
}

function getConductor(dniConductor) {
  return new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearInterval(id);
      resolve({
        name: 'Luis',
        dni: dniConductor,
        sexo: 'M',
      });
    }, Math.random() * 100);
  })
}

getPlaca('ENR323')
  .then(async ({dniConductor}) => {
    return await getConductor(dniConductor);
  })
  .then(console.log)
  .catch(e => {
    console.error(new Date.toLocaleString(), e)
});
