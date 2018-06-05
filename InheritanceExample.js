"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomFile = (function () {
    function CustomFile(fileName, flags) {
        this.fileName = fileName;
        this.flags = flags;
    }
    CustomFile.prototype.isReadable = function () {
        var splitted = this.flags.split(",");
        var r = splitted[0], w = splitted[1], x = splitted[2];
        return parseInt(r) == 4;
    };
    CustomFile.prototype.isWritable = function () {
        var splitted = this.flags.split(",");
        var r = splitted[0], w = splitted[1], x = splitted[2];
        return parseInt(w) == 2;
    };
    CustomFile.prototype.isExecutable = function () {
        var splitted = this.flags.split(",");
        var r = splitted[0], w = splitted[1], x = splitted[2];
        return parseInt(x) == 1;
    };
    return CustomFile;
}());
exports.CustomFile = CustomFile;
function testCustomFile() {
    var file = new CustomFile("foobar.txt", "4,2,1");
    console.log("isReadable = ", file.isReadable());
    console.log("isWritable = ", file.isWritable());
    console.log("isExecutable = ", file.isExecutable());
    file = new CustomFile("foobar.txt", "4,0,0");
    console.log();
    console.log("isReadable = ", file.isReadable());
    console.log("isWritable = ", file.isWritable());
    console.log("isExecutable = ", file.isExecutable());
}
exports.testCustomFile = testCustomFile;
function testRunOptions() {
    var ro1 = {
        program: "foo.exe",
        commandline: "name=foo"
    };
    console.log(ro1.program, " and ", ro1.commandline);
    var ro2 = {
        program: "foo.exe",
        commandline: ["name='foo'", "age=10", "wage=100.0"]
    };
    console.log(ro2.program, " and ", ro2.commandline);
    var ro3 = {
        program: "foo.exe",
        commandline: function () { return "hello world!"; }
    };
    console.log(ro3.program, " and ", ro3.commandline());
}
exports.testRunOptions = testRunOptions;
var Worker = (function () {
    function Worker(id, name, age, wage, active) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (age === void 0) { age = 0; }
        if (wage === void 0) { wage = 0.0; }
        if (active === void 0) { active = false; }
        this._id = id;
        this._name = name;
        this._age = age;
        this._wage = wage;
        this._active = active;
    }
    Object.defineProperty(Worker.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "wage", {
        get: function () {
            return this._wage;
        },
        set: function (wage) {
            this._wage = wage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    Worker.prototype.str = function () {
        return "Worker{ id =" + this.id + ", name = " + this.name +
            ", age = " + this.age + ", wage = " + this.wage +
            ", active = " + this.active + " }";
    };
    return Worker;
}());
exports.Worker = Worker;
var WorkerDAOManualImpl = (function () {
    function WorkerDAOManualImpl() {
        this._container = new Array();
    }
    Object.defineProperty(WorkerDAOManualImpl.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (container) {
            this._container = container;
        },
        enumerable: true,
        configurable: true
    });
    WorkerDAOManualImpl.prototype.checkIfIdDuplicate = function (id) {
        for (var i = 0; i < this.container.length; ++i) {
            if (this.container[i].id == id)
                return true;
        }
        return false;
    };
    WorkerDAOManualImpl.prototype.save = function (w) {
        if (this.checkIfIdDuplicate(w.id))
            return;
        this.container.push(w);
    };
    WorkerDAOManualImpl.prototype.update = function (id, w) {
        var oldWorker = this.findById(id);
        if (oldWorker == null)
            return;
        var index = this.container.indexOf(oldWorker);
        this.container[index] = w;
    };
    WorkerDAOManualImpl.prototype.remove = function (id) {
        var temp = this.container.filter(function (element, index, arr) {
            return element.id != id;
        });
        this.container = temp;
    };
    WorkerDAOManualImpl.prototype.findById = function (id) {
        for (var i = 0; i < this.container.length; ++i) {
            if (this.container[i].id == id)
                return this.container[i];
        }
        return null;
    };
    WorkerDAOManualImpl.prototype.findAll = function () {
        return this.container;
    };
    return WorkerDAOManualImpl;
}());
exports.WorkerDAOManualImpl = WorkerDAOManualImpl;
