
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function(){
    return "Hello, World!";
}

//(1)
function sayHello(input){
    return "Hello, " + input +"!";
}

//(2)
function isFive(input){
    return input === 5;
}

//(3)
function isEven(input){
    return input % 2 === 0;
}

//(4)
function isVowel(input){
    if(typeof input !== 'string' || input.length > 1 || typeof input == 'boolean'){
        return false;
    } 
    var lowerInput = input.toLowerCase();
    if(lowerInput === 'a' || lowerInput === "e" || lowerInput === "i" || lowerInput === "o" || lowerInput === "u"){
        return true;
    }  
}

//(5)
function add(a, b){
    if(isNaN(a) == true || isNaN(b) == true){
        return NaN;   
    }else{
       return Number(a) + Number(b);
    }
}