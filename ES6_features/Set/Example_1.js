const names = new Set();

names.add("Daniel").add("Kasia").add("Marla");
console.log(names);
console.log(names.has("Marla"));
names.delete("Marla");
console.log(names.has("Marla"));

const size = names.size;
console.log(size);

console.log(names);
