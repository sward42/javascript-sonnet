var sonnet = document.getElementById("sonnet").innerHTML;


console.log(sonnet);

console.log(sonnet.indexOf("orphans"));

console.log(sonnet.length);

var newSonnet = sonnet.replace("winter", "yuletide");
console.log(newSonnet);
var finalSonnet = newSonnet.replace(/the/g, "a large ");
console.log(finalSonnet);

document.getElementById("sonnet").innerHTML = finalSonnet;
