interface Readable {
    isReadable():Boolean;
}

interface Writable {
    isWritable():Boolean;
}

interface Executable {
    isExecutable(): Boolean ;
}



export class CustomFile implements  Readable, Writable, Executable {
    private fileName:string;
    private flags:string ;
    public constructor(fileName:string , flags:string) {
        this.fileName = fileName;
        this.flags = flags ;
    }

    isReadable(): Boolean {
        var splitted = this.flags.split(",");
        var r = splitted[0],
            w = splitted[1],
            x = splitted[2];
        return parseInt(r) == 4;
    }

    isWritable(): Boolean {
        var splitted = this.flags.split(",");
        var r = splitted[0],
            w = splitted[1],
            x = splitted[2];
        return parseInt(w) == 2;
    }

    isExecutable(): Boolean {
        var splitted = this.flags.split(",");
        var r = splitted[0],
            w = splitted[1],
            x = splitted[2];
        return parseInt(x) == 1;
    }

}



export function testCustomFile() {
    var file:CustomFile = new CustomFile("foobar.txt", "4,2,1");
    console.log("isReadable = ", file.isReadable());
    console.log("isWritable = ", file.isWritable());
    console.log("isExecutable = ", file.isExecutable());

    file = new CustomFile("foobar.txt", "4,0,0");
    console.log();
    console.log("isReadable = ", file.isReadable());
    console.log("isWritable = ", file.isWritable());
    console.log("isExecutable = ", file.isExecutable());
}


//testCustomFile();



interface RunOptions {
    program:string ;
    commandline:string|string[]|(()=>string);
}


export function testRunOptions() {
    var ro1 = {
       program:"foo.exe",
        commandline: "name=foo"
    };

    console.log(ro1.program, " and ", ro1.commandline);

    var ro2 = {
        program:"foo.exe",
        commandline: ["name='foo'","age=10","wage=100.0"]
    };

    console.log(ro2.program, " and ", ro2.commandline);

    var ro3 = {
        program:"foo.exe",
        commandline: ()=> "hello world!"
    }

    console.log(ro3.program, " and ", ro3.commandline());
}


//testRunOptions();



export interface Person {
     str():string;
}

export class Worker implements Person {
    private _id:number
    private _name:string
    private _age:number
    private _wage:number
    private _active:boolean

    public constructor(id:number=0, name:string= "", age:number= 0, wage:number=0.0, active:boolean=false) {
        this._id = id
        this._name = name
        this._age = age
        this._wage = wage
        this._active = active
    }

    public set id(id:number) {
        this._id = id
    }
    public set name(name:string) {
        this._name = name
    }
    public set age(age:number) {
        this._age = age
    }
    public set wage(wage:number) {
        this._wage = wage
    }
    public set active(active:boolean) {
        this._active = active
    }

    public get id():number {
        return this._id
    }
    public get name() {
        return this._name
    }
    public get age() {
        return this._age
    }
    public get wage() {
        return this._wage
    }
    public get active() {
        return this._active
    }



    public str(): string {
        return "Worker{ id ="+this.id + ", name = "+ this.name +
            ", age = " + this.age + ", wage = "+ this.wage +
            ", active = "+ this.active +" }";
    }

}


export interface WorkerDAO {
    save(w:Worker): void
    update(id:number, w:Worker): void
    remove(id:number)
    findById(id:number):Worker
    findAll():Array<Worker>
}

export class WorkerDAOManualImpl implements  WorkerDAO {
    private _container:Array<Worker>

    public constructor() {
        this._container = new Array<Worker>()
    }

    public get container() {
        return this._container
    }
    public set container(container:Array<Worker>) {
        this._container = container
    }

    private checkIfIdDuplicate(id:number):boolean {
        for(var i = 0 ; i< this.container.length; ++i) {
            if(this.container[i].id == id) return true
        }
        return false
    }



    public save(w: Worker): void {
        if(this.checkIfIdDuplicate(w.id)) return
        this.container.push(w)
    }

    public update(id: number, w: Worker): void {
        var oldWorker = this.findById(id)
        if(oldWorker == null) return
        var index = this.container.indexOf(oldWorker)
        this.container[index] = w
    }

    public remove(id: number) {
        var temp  = this.container.filter(function(element, index, arr) {
            return element.id != id
        })
        this.container = temp
    }

    public findById(id: number): Worker {
        for(var i = 0; i< this.container.length; ++i) {
            if(this.container[i].id == id) return this.container[i]
        }
        return null;
    }

    public findAll(): Array<Worker> {
        return this.container
    }

}