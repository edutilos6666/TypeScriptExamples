function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    return n1 / n2;
}
var n1 = 20, n2 = 10;
console.log("add = ", add(n1, n2));
console.log("subtract = ", subtract(n1, n2));
console.log("multiply = ", multiply(n1, n2));
console.log("divide = ", divide(n1, n2));
function _add(n1, n2) {
    return n1 + n2;
}
function _sub(n1, n2) {
    return n1 - n2;
}
function _mul(n1, n2) {
    return n1 * n2;
}
function _div(n1, n2) {
    return n1 / n2;
}
var n1 = 10, n2 = 3;
console.log("_add = ", _add(n1, n2));
console.log("_sub = ", _sub(n1, n2));
console.log("_mul = ", _mul(n1, n2));
console.log("_div = ", _div(n1, n2));
var SimpleMath = (function () {
    function SimpleMath(n1, n2) {
        this._n1 = n1;
        this._n2 = n2;
    }
    Object.defineProperty(SimpleMath.prototype, "n1", {
        get: function () {
            return this._n1;
        },
        set: function (n1) {
            this._n1 = n1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleMath.prototype, "n2", {
        get: function () {
            return this._n2;
        },
        set: function (n2) {
            this._n2 = n2;
        },
        enumerable: true,
        configurable: true
    });
    SimpleMath.prototype.add = function () {
        return this._n1 + this._n2;
    };
    SimpleMath.prototype.sub = function () {
        return this._n1 - this._n2;
    };
    SimpleMath.prototype.mul = function () {
        return this._n1 * this._n2;
    };
    SimpleMath.prototype.div = function () {
        return this._n1 / this._n2;
    };
    return SimpleMath;
}());
var sm = new SimpleMath(10, 3);
var addResult = sm.add();
var subResult = sm.sub();
var mulResult = sm.mul();
var divResult = sm.div();
console.log("<<SimpleMath>>");
console.log("10+3 = ", addResult);
console.log("10-3 = ", subResult);
console.log("10*3 = ", mulResult);
console.log("10/3 = ", divResult);
sm.n1 = 100;
sm.n2 = 30;
console.log("sm.add()= ", sm.add());
console.log("sm.sub() = ", sm.sub());
console.log("sm.mul() = ", sm.mul());
console.log("sm.div() = ", sm.div());
