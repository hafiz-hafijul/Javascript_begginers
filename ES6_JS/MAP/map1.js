let myMap = new Map();

myMap.set("Coach1", "Lampard");
myMap.set("Coach2", "Pep");
myMap.set("Coach3", "Klop");
myMap.set("Coach4", "Jose");
myMap.set("Coach5", "Zidane");
myMap.set("Coach6", "Ole");

// console.log(myMap.values());
// console.log(myMap.keys());

for (let name of myMap.values()) {
  console.log("Name of Coach : " + name);
}
