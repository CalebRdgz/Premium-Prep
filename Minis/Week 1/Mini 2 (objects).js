//objects
//dot notation vs bracket notation

var magicObj = {
    "madeByAWizard" : true, //KEYS ARE STRINGS
    secretCode : "open sesame", //keys do not have to be in quotations
    familiars : ['frog','bat','cat','owl'],
    wands : 1
}

//dot notation
console.log('secret: ', magicObj.secretCode);

//bracket notation
console.log('secret: ',magicObj['secretCode']); //string HAS to be in quotes in bracket notation
console.log('secret: ',magicObj['secret' + 'Code']) //same thing as secretCode

function secretCode(){
    return 'secretCode';
}

//dot notation has to be exactly the key after the dot
//variable that represents a key, has to be bracket notation