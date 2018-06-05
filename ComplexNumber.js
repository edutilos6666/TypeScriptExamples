"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.ComplexNumber = ComplexNumber;
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
exports.ComplexNumber2 = ComplexNumber2;
