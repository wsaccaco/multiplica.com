function readConfig(pathFile) {
  return fetch(pathFile)
  .then(r => r.json())
  .then(d => d.puerto)
    .catch(e => {
      return 6969;
  })
}

readConfig('./src/config.json')
  .then(port => {
    document.write(`Number port: `, port);
})