export function promisify(fn) {
  return function fnWithPromise() {
    let args = [].slice.apply(arguments, 1);
    return new Promise((resolve, reject) => {
      fn.apply(null, args.push((err, value) => {
        if (err) return reject(err);
        return resolve(value);
      }));
    });
  };
}
