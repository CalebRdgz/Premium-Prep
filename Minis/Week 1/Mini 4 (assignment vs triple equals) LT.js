// = vs === (assignment vs triple equals)

//=== comparison

//console.log(11 === '11'); -> false
//console.log('11' === '11'); -> true

//var eleven = 11;
//console.log(11 === eleven); -> true

//= assignment

var eleven = 11;
var banana = 11;
console.log(eleven === banana);
banana = 12; //reassignment -> banana is now 12 instead of 11
console.log(eleven === banana);
var elevens = [11,'11'];
var elevensObj = {
    number: 11,
    string: '11'
};
elevens.push(elevensObj);

console.log(eleven);
console.log(elevens);
console.log(elevensObj);

//if
if(eleven === 12){
    console.log('Huh?!, eleven is ' + eleven);
}else{
    console.log('eleven is '+eleven);
}

console.log(eleven = 12); //this makes changes to the code, so eleven is now 12 (not the log, but the code)
console.log(eleven);