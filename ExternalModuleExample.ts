import cm = require("./ComplexNumber");
import sm = require("./SimpleMath");


function test() {
    var cn1 = new cm.ComplexNumber(1, 1);
    var cn2 = new cm.ComplexNumber(2, 2);
    console.log("cn1 = ", cn1.toString());
    console.log("cn2 = ", cn2.toString());
    console.log("cn1 + cn2 = ", cn1.add(cn2).toString());
    console.log("cn1 - cn2 = ", cn1.subtract(cn2).toString());
    console.log("cn1 * cn2 = ", cn1.multiply(cn2).toString());
    console.log();

    var sm1 = new sm.SimpleMath(20, 10);
    console.log("sm add = ", sm1.add());
    console.log("sm subtract = ", sm1.subtract());
    console.log("sm multiply = ", sm1.multiply());
    console.log("sm divide = ", sm1.divide());
}


test();