var sonnet = document.getElementById("sonnet").innerHTML;


console.log("original sonnet: ",sonnet);
var startingPosition = sonnet.indexOf("orphans");
console.log("starting position of orphans: ",sonnet.indexOf("orphans"));

console.log("number of characters :",sonnet.length);

var newSonnet = sonnet.replace("winter", "yuletide");
console.log(newSonnet);
var finalSonnet = newSonnet.replace(/the /gi, " a large ");
console.log(finalSonnet);

document.getElementById("sonnet").innerHTML = finalSonnet;

switch(true) {
	case startingPosition > 410:
		console.log("hey, you were right.  that never happens");
		break;
	case startingPosition <= 410:
		console.log("hey, you were wrong. that never happens");
		break;
	default:
		console.log("WTF");
		break;		
}


var myArray = [];

/* for (var i = 0; i < myArray.length; i++) {
	console.log(i + ": ", typeof(myArray[i]));
}

for (var i = 0; i < 150; i += 10) {
	console.log("current value :", i);	
}

for (var i = 100; i > 2; i /= 2) {
	console.log("current value :", i);
	myArray.push(i);
}

console.log("myArray: ", myArray); */

for (var i = 100; i > 0; i--) {
	if (i % 2 === 0) {
		myArray.push(i);
	} else {
		myArray.unshift(i);
	}
}

console.log("myArray: ", myArray);
