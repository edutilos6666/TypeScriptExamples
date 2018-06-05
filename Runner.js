"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var complexNumber = require("./ComplexNumber");
var inheritanceExample = require("./InheritanceExample");
var objects = require("./Objects");
var namespaceExample = require("./NamespaceExample");
function main() {
    testComplexNumber();
    testInheritanceExample();
    testObjects();
    testNamespaceExample();
}
main();
function testNamespaceExample() {
    console.log("<<with exported functions>>");
    namespaceExample.testNamespace();
    console.log("\n<<with exported classes>>");
    var ComplexNumber2 = namespaceExample.com.edutilos.src.ComplexNumber2;
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
function testObjects() {
    console.log("<<person object>>");
    objects.testPersonObject();
    console.log("<<worker object>>");
    objects.testWorkerObject();
}
function testInheritanceExample() {
    var CustomFile = inheritanceExample.CustomFile;
    console.log("\n<<CustomFile>>");
    var file = new CustomFile("foobar.txt", "4,2,1");
    console.log("isReadable = ", file.isReadable());
    console.log("isWritable = ", file.isWritable());
    console.log("isExecutable = ", file.isExecutable());
    file = new CustomFile("foobar.txt", "4,0,0");
    console.log();
    console.log("isReadable = ", file.isReadable());
    console.log("isWritable = ", file.isWritable());
    console.log("isExecutable = ", file.isExecutable());
    console.log("\n<<or with exported functions>>");
    inheritanceExample.testCustomFile();
    console.log("");
    inheritanceExample.testRunOptions();
    console.log("\n<<Worker Example>>");
    var Worker = inheritanceExample.Worker;
    var WorkerDAOManualImpl = inheritanceExample.WorkerDAOManualImpl;
    var dao = new WorkerDAOManualImpl();
    var workers = new Array();
    workers.push(new Worker(1, "foo", 10, 100.0, true));
    workers.push(new Worker(2, "bar", 20, 200.0, false));
    workers.push(new Worker(3, "bim", 30, 300.0, true));
    workers.forEach(function (value, index, arr) {
        dao.save(value);
    });
    var all = dao.findAll();
    console.log("<<all workers>>");
    all.forEach(function (w, index, arr) {
        console.log(w.str());
    });
    var one = dao.findById(1);
    console.log("one with id = 1 = ", one.str());
    dao.update(1, new Worker(1, "new-foo", 66, 666.6, false));
    one = dao.findById(1);
    console.log("one with id = 1 = ", one.str());
    dao.remove(1);
    all = dao.findAll();
    console.log("<<all workers after remove id = 1>>");
    all.forEach(function (w, index, arr) {
        console.log(w.str());
    });
}
function testComplexNumber() {
    var ComplexNumber2 = complexNumber.ComplexNumber2;
    var ComplexNumber = complexNumber.ComplexNumber;
    var cm1 = new ComplexNumber2(10, 10);
    var cm2 = new ComplexNumber2(3, 3);
    var cmAdd = cm1.add(cm2);
    var cmSub = cm1.sub(cm2);
    var cmMul = cm1.mul(cm2);
    var cmDiv = cm1.div(cm2);
    console.log("cm1 = ", cm1.str());
    console.log("cm2 = ", cm2.str());
    console.log("cm1 + cm2 = ", cmAdd.str());
    console.log("cm1 - cm2 = ", cmSub.str());
    console.log("cm1 * cm2 = ", cmMul.str());
    console.log("cm1 / cm2 = ", cmDiv.str());
    console.log("");
    var cm3 = new ComplexNumber(10, 10);
    var cm4 = new ComplexNumber(3, 3);
    console.log("cm3 = ", cm3.toString());
    console.log("cm4 = ", cm4.toString());
    console.log("cm3 + cm4 = ", cm3.add(cm4).toString());
    console.log("cm3 - cm4 = ", cm3.subtract(cm4).toString());
    console.log("cm3 * cm4 = ", cm3.multiply(cm4).toString());
}
