 const someFn = (word) => {
if (!word) return word;
    return word.toUpperCase()[0] + word.slice(1).toLowerCase();
}
someFn('dOcTYpE');


const sayHello = (name) => {
const userName = name.toUpperCase()[0] + name.slice(1).toLowerCase();
if(userName === "Mark") {
alert(`Hi ${userName}`)
} else {
  alert(`Hello ${userName}`)
}
}
sayHello("DimA")


const filterStrings = (arr = [], nomberLength) => {
const result = arr.filter(item => item.length <= nomberLength);
return result;
}

 filterStrings(["I love JS", "some very long string", "hell"], 9)