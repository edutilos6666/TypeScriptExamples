"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import ComplexNumber = com.edutilos.src.ComplexNumber;
var com;
(function (com) {
    var edutilos;
    (function (edutilos) {
        var src;
        (function (src) {
            var ComplexNumber = (function () {
                function ComplexNumber(real, im) {
                    if (real === void 0) { real = 0; }
                    if (im === void 0) { im = 0; }
                    this.real = real;
                    this.im = im;
                }
                ComplexNumber.prototype.add = function (other) {
                    var res = new ComplexNumber(0, 0);
                    res.real = this.real + other.real;
                    res.im = this.im + other.im;
                    return res;
                };
                ComplexNumber.prototype.subtract = function (other) {
                    var res = new ComplexNumber(0, 0);
                    res.real = this.real - other.real;
                    res.im = this.im - other.im;
                    return res;
                };
                ComplexNumber.prototype.multiply = function (other) {
                    var res = new ComplexNumber();
                    res.real = this.real * other.real - this.im * other.im;
                    res.im = this.real * other.im + this.im * other.real;
                    return res;
                };
                ComplexNumber.prototype.toString = function () {
                    return this.real + " + i*" + this.im;
                };
                return ComplexNumber;
            }());
            src.ComplexNumber = ComplexNumber;
            var SimpleMath = (function () {
                function SimpleMath(n1, n2) {
                    if (n1 === void 0) { n1 = 0; }
                    if (n2 === void 0) { n2 = 0; }
                    this.n1 = n1;
                    this.n2 = n2;
                }
                SimpleMath.prototype.add = function () {
                    return this.n1 + this.n2;
                };
                SimpleMath.prototype.subtract = function () {
                    return this.n1 - this.n2;
                };
                SimpleMath.prototype.multiply = function () {
                    return this.n1 * this.n2;
                };
                SimpleMath.prototype.divide = function () {
                    return this.n1 / this.n2;
                };
                return SimpleMath;
            }());
            src.SimpleMath = SimpleMath;
            var ComplexNumber2 = (function () {
                function ComplexNumber2(real, im) {
                    this._real = real;
                    this._im = im;
                }
                Object.defineProperty(ComplexNumber2.prototype, "real", {
                    get: function () {
                        return this._real;
                    },
                    set: function (real) {
                        this._real = real;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ComplexNumber2.prototype, "im", {
                    get: function () {
                        return this._im;
                    },
                    set: function (im) {
                        this._im = im;
                    },
                    enumerable: true,
                    configurable: true
                });
                ComplexNumber2.prototype.add = function (other) {
                    var res = new ComplexNumber2(0, 0);
                    res.real = this.real + other.real;
                    res.im = this.im + other.im;
                    return res;
                };
                ComplexNumber2.prototype.sub = function (other) {
                    var res = new ComplexNumber2(0, 0);
                    res.real = this.real - other.real;
                    res.im = this.im - other.im;
                    return res;
                };
                ComplexNumber2.prototype.mul = function (other) {
                    var res = new ComplexNumber2(0, 0);
                    res.real = this.real * other.real - this.im * other.im;
                    res.im = this.real * other.im + this.im * other.real;
                    return res;
                };
                ComplexNumber2.prototype.div = function (other) {
                    var temp = Math.pow(other.real, 2) + Math.pow(other.im, 2);
                    var res = this.mul(new ComplexNumber2(other.real, -other.im));
                    return new ComplexNumber2(res.real / temp, res.im / temp);
                };
                ComplexNumber2.prototype.str = function () {
                    return this.real + " + i*" + this.im;
                };
                return ComplexNumber2;
            }());
            src.ComplexNumber2 = ComplexNumber2;
        })(src = edutilos.src || (edutilos.src = {}));
    })(edutilos = com.edutilos || (com.edutilos = {}));
})(com = exports.com || (exports.com = {}));
function testNamespace() {
    var cn1 = new com.edutilos.src.ComplexNumber(1, 1);
    var cn2 = new com.edutilos.src.ComplexNumber(2, 2);
    console.log("cn1 = ", cn1.toString());
    console.log("cn2 = ", cn2.toString());
    console.log("cn1 + cn2 = ", cn1.add(cn2).toString());
    console.log("cn1 - cn2 = ", cn1.subtract(cn2).toString());
    console.log("cn1 * cn2 = ", cn1.multiply(cn2).toString());
    console.log();
    var sm = new com.edutilos.src.SimpleMath(20, 10);
    console.log("sm add = ", sm.add());
    console.log("sm subtract = ", sm.subtract());
    console.log("sm multiply = ", sm.multiply());
    console.log("sm divide = ", sm.divide());
    var ComplexNumber2 = com.edutilos.src.ComplexNumber2;
    var cn3 = new ComplexNumber2(10, 10);
    var cn4 = new ComplexNumber2(3, 3);
    var cnAdd = cn3.add(cn4);
    //that does not work: var cnSub:ComplexNumber2 = cn3.sub(cn4)
    var cnSub = cn3.sub(cn4);
    var cnMul = cn3.mul(cn4);
    var cnDiv = cn3.div(cn4);
    console.log("cn3 = ", cn3.str());
    console.log("cn4 = ", cn4.str());
    console.log("cn3 + cn4 = ", cnAdd.str());
    console.log("cn3 - cn4 = ", cnSub.str());
    console.log("cn3 * cn4 = ", cnMul.str());
    console.log("cn3 / cn4 = ", cnDiv.str());
}
exports.testNamespace = testNamespace;
// testNamespace(); 
