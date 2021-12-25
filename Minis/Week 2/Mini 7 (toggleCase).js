//toy problem:
//write function toggleCase which takes in a string and returns a new string where all the lowercase 
//letters are changed to uppercase and all the uppercfase letters are changed to lowercase

function toggleCase(string){
    var newChar = "";
    for (i = 0; i < string.length; i++){
        var char = string[i];
        if (char === char.toUpperCase()){
            char.toLowerCase();
            newChar += char;
        }if (char === char.toLowerCase()){
            char.toUpperCase();
            newChar += char;
        }
    }
    console.log(newChar);
}

//test cases:
toggleCase('mArIO'); //'mArIO'
toggleCase('PRP'); //'prp'
toggleCase('Good news, everyone!'); //'gOOD NEWS, EVERYONE!'
