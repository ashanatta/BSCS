const obj = {
  name: "ashan",
  age: 23,
  uni: "umt",
  "key-alive": true,
  system: function () {
    return this.name;
  },
};

const cars = {
  ptrolcar: "bmw",
  car2: "honda",
  car3: "forde",
  car4: "mehran",
};

// console.log(obj);
// console.log("name is: ", obj.name);
// console.log("is am i alive: ", obj["key-alive"]);
const keys = Object.keys(obj);
const value = Object.values(obj);
// console.log(keys);
// console.log(value);
// console.log(obj.system());

const entries = Object.entries(obj);
// console.log(Object.entries(obj.age));
// console.log(entries);

// https://www.youtube.com/shorts/NvJrhew86iE

const mergeitem = Object.assign({}, obj, cars);

// console.log(mergeitem);

console.log(cars.hasOwnProperty("car4"));
console.log(obj.hasOwnProperty("car4"));
