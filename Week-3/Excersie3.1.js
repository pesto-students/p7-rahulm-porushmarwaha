function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

const add = function (a,b){
    return a + b;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100,100));