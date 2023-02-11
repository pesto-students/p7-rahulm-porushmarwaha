function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment(); // Count - 1 // count resides in closure
increment(); // Count - 2
increment(); // Count - 3

log(); // Count is 0 // message resides in closure but not increment due
// to increment and log are 2 different returns that does not effect each other values these are
// 2 different closures that not interchange values with each other.
// that why the Count is 0
