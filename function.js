function calculateArea(length,edge) {
	return length * edge;
}

let squareArea1 = calculateArea(4,4);
let squareArea2 = calculateArea(2,2);
let squareArea3 = calculateArea(5,5);
let squareArea4 = calculateArea(3,3);

console.log(squareArea1);
console.log(squareArea2);
console.log(squareArea3);
console.log(squareArea4);

*******************************************

var multy = function(a,b){
    return a*b;
}

console.log(multy(324234, 47));

********************************************

var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}

console.log(euroToYen(dollarToEuro(137)));

*****************************************

function renderPerson(name, dateBirth, eyesColor, yearsOld, sex) {
    return name + " is a " + yearsOld + " years old " + sex + " born on " + dateBirth + " with " + eyesColor + " eyes"; 
}

console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));

*****************************************

var names = ['John', 'Kenny', 'Tom', "Bob", 'Dilan'];

function sortNames(){
    return names.sort();
}

console.log(sortNames(names));
