const _promise = function(timeout, promise) {

  let promiseTimeout = new Promise((resolve, reject) => {
    let nid = setTimeout(() => {
      clearTimeout(nid);
      reject(`La prome se demoró`);
    }, timeout);
  });

  return Promise.race([
    promise,
    promiseTimeout,
  ]);
};

let fetched = new Promise((resolve) => {
  let nid = setTimeout(() => {
    clearTimeout(nid);
    resolve(true);
  }, 2000);
});

_promise(3000, fetched)
  .then(console.log)
  .catch(console.error);
