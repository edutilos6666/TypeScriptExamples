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


function _add(n1, n2) {
    return n1 + n2
}

function _sub(n1, n2) {
    return n1 -n2
}

function _mul(n1, n2) {
    return n1 * n2
}

function _div(n1, n2) {
    return n1 / n2
}


var n1 = 10 , n2 = 3
console.log("_add = ", _add(n1, n2))
console.log("_sub = ", _sub(n1, n2) )
console.log("_mul = ", _mul(n1, n2))
console.log("_div = ", _div(n1, n2))

class SimpleMath {
    private _n1:number
    private _n2:number

    constructor(n1:number, n2:number) {
        this._n1 = n1
        this._n2 = n2
    }

    set n1(n1:number) {
        this._n1 = n1
    }

    set n2(n2:number) {
        this._n2 = n2
    }

    get n1():number {
        return this._n1
    }
    get n2() {
        return this._n2
    }

    add():number {
        return this._n1 + this._n2
    }
    sub(): number {
        return this._n1 - this._n2
    }
    mul():number {
        return this._n1 * this._n2
    }
    div():number {
        return this._n1/this._n2
    }
}


var sm = new SimpleMath(10, 3)
var addResult = sm.add()
var subResult =  sm.sub()
var mulResult = sm.mul()
var divResult = sm.div()

console.log("<<SimpleMath>>")
console.log("10+3 = ", addResult)
console.log("10-3 = ", subResult)
console.log("10*3 = ", mulResult)
console.log("10/3 = ", divResult)

sm.n1  = 100
sm.n2 = 30
console.log("sm.add()= ", sm.add())
console.log("sm.sub() = ", sm.sub())
console.log("sm.mul() = ", sm.mul())
console.log("sm.div() = ", sm.div())