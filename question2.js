const _promise = function(timeout, promise){

    let promiseTimeout = new Promise((resolve, reject) => {
      let nid = setTimeout(() => {
        clearTimeout(nid);
        reject(`La prome se demoró`)
      }, timeout)
    })
  
    return Promise.race([
      promise,
      promiseTimeout
    ])
  }

  let fetched = new Promise((resolve, reject) => {
    let nid = setTimeout(() => {
        resolve(true)
    }, 2000)
  })

  _promise(100, fetched)
  .catch(console.error)
