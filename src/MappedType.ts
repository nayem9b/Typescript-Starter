const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

// Type er upore map chalanoi holo mapped type

type AreaNumber = {
  height: number;
  width: number;
};
type A = AreaNumber["height"]; //Look Up type
type B = keyof AreaNumber; // Width | height
const obj = {
  name: "Persian",
};
obj["name"]; //Object notation use kore object er vitor theke kauke pete pari

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

const reactangularArea: AreaReadOnly = {
  height: 150,
  width: 80,
};
