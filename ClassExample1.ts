class Person {
    //fields
    id:number;
    name:string;
    age:number;
    wage:number;
    active:Boolean;

    constructor(id:number, name:string, age:number, wage:number, active:Boolean) {
        this.id = id ;
        this.name = name;
        this.age = age;
        this.wage = wage;
        this.active = active;
    }


    setId(id:number):void {
        this.id = id ;
    }

    getId():number {
        return this.id;
    }

    setName(name:string) {
        this.name = name;
    }

    getName():string {
        return this.name;
    }

    setAge(age:number) {
        this.age = age;
    }

    getAge():number {
        return this.age ;
    }

    setWage(wage:number) {
        this.wage = wage;
    }

    getWage(): number {
        return this.wage ;
    }

    setActive(active:Boolean) {
        this.active = active;
    }

    isActive():Boolean {
        return this.active ;
    }

    toString():string {
        return "["+ this.id + ", "+ this.name + " , "+ this.age+ " , "+ this.wage+ " , "+ this.active + "]";
    }
}

var p1 = new Person(1, "foo", 10, 100.0, true);
console.log(p1.toString());
p1.setName("new_foo");
console.log(p1.getName());
p1.setAge(66);
console.log(p1.toString());