function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

let object1 = {
  name: "John Doe",
};

let object2 = {
  name: "Jani Doe",
};

let object3 = {
  name: "Janardhan Doe",
};

greet.call(object1, "Hello", "!"); // Output: Hello John Doe!
greet.apply(object2, ["Hello", "!"]); // Output: Hello Jani Doe!

let boundGreet = greet.bind(object3, "Hello", "!");
boundGreet(); // Output: Hello Janardhan Doe!
