let ninjas = ["shaun", "cristal", "yoshi", "ryu", "yoshi", "ryu"];
console.log("ninjas: ", ninjas);

const refinedNinjas = new Set(ninjas);
console.log("refinedNinjas: ", refinedNinjas);

ninjas = [...refinedNinjas];
console.log("ninjas after spread: ", ninjas)