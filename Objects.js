"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    fname: "foo",
    lname: "bar",
    age: 10,
    wage: 100.0,
    setFname: function (fname) {
        this.fname = fname;
    },
    setLname: function (lname) {
        this.lname = lname;
    },
    setAge: function (age) {
        this.age = age;
    },
    setWage: function (wage) {
        this.wage = wage;
    },
    getFname: function () {
        return this.fname;
    },
    getLname: function () {
        return this.lname;
    },
    getAge: function () {
        return this.age;
    },
    getWage: function () {
        return this.wage;
    },
    toString: function () {
        return this.fname + ", " + this.lname + ", " + this.age + ", " + this.wage;
    }
};
function testPersonObject() {
    console.log(person.toString());
    person.setFname("new_foo");
    console.log(person.toString());
    function printPerson(obj) {
        console.log(obj.toString());
    }
    printPerson(person);
    function printName(obj) {
        console.log(obj.fname, " , ", obj.lname);
    }
    printName({ fname: "edu", lname: "tilos" });
    printName(person);
}
exports.testPersonObject = testPersonObject;
var worker = {
    id: 10,
    name: "edutilos",
    age: 100,
    wage: 1000.0,
    active: false,
    setId: function (id) {
        this.id = id;
    },
    getId: function () {
        return this.id;
    },
    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    },
    setAge: function (age) {
        this.age = age;
    },
    getAge: function () {
        return this.wage;
    },
    setWage: function (wage) {
        this.wage = wage;
    },
    getWage: function () {
        return this.wage;
    },
    setActive: function (active) {
        this.active = active;
    },
    isActive: function () {
        return this.active;
    },
    str: function () {
        return "Worker(" + this.id + ", " + this.name + ", " + this.age + ", " + this.wage + ", " + this.active + ")";
    }
};
function testWorkerObject() {
    console.log("id = ", worker.id);
    console.log("name = ", worker.name);
    console.log("age = ", worker.age);
    console.log("wage = ", worker.wage);
    console.log("active = ", worker.active);
    console.log();
    console.log("worker str = ", worker.str());
    console.log();
    worker.setId(2);
    worker.setName("bar");
    worker.setAge(20);
    worker.setWage(200.0);
    worker.setActive(true);
    console.log("id = ", worker.getId());
    console.log("name = ", worker.getName());
    console.log("age = ", worker.getAge());
    console.log("wage = ", worker.getWage());
    console.log("active = ", worker.isActive());
}
exports.testWorkerObject = testWorkerObject;
