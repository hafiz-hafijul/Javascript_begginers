const name = "Hafiz";

function reverseName(name) {
    console.log(name);
    return(name.split('').reverse().join(''));
}
console.log(reverseName(name));