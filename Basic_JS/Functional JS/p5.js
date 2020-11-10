function host(msg) {
  return function (name) {
    console.log(msg + " " + name);
  };
}

const vri = host("Good morning ");
const get = host("Hello");
vri("Hafiz");
get("Hafiz");
