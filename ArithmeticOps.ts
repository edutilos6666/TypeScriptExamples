function add(n1:number , n2:number):number {
    return n1 + n2 ;
}

function subtract(n1, n2):number {
    return n1 - n2 ;
}

function multiply(n1, n2) {
    return n1* n2 ;
}

function divide(n1, n2):number {
    return n1/ n2 ;
}


var n1:number = 20 , n2:number = 10 ;
console.log("add = ", add(n1, n2));
console.log("subtract = ", subtract(n1, n2));
console.log("multiply = ", multiply(n1, n2));
console.log("divide = ", divide(n1, n2));