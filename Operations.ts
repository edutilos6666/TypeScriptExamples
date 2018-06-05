//arithmetic ops

class ArithmeticOps {
    add(n1, n2):number {
        return n1 + n2 ;
    }

    subtract(n1, n2):number {
        return n1 - n2 ;
    }

    multiply(n1, n2):number {
        return n1 *n2 ;
    }

    divide(n1, n2):number {
        return n1 / n2 ;
    }

    modulo(n1, n2):number {
        return n1 % n2 ;
    }
}


function testArithmeticOps() {
    console.log("<<arithmetic ops>>");
   var n1:number = 20 , n2:number = 3 ;
   var ops = new ArithmeticOps();
   console.log("add = ", ops.add(n1, n2));
   console.log("subtract = ", ops.subtract(n1, n2));
   console.log("multiply = ", ops.multiply(n1, n2));
   console.log("divide = ", ops.divide(n1, n2));
   console.log("modulo = ", ops.modulo(n1, n2));
   console.log();
}

testArithmeticOps();


//relational ops
function gt(n1:number , n2:number):Boolean {
    return n1 > n2 ;
}

function ge(n1:number, n2:number):Boolean {
    return n1 >= n2 ;
}

function lt(n1:number, n2:number):Boolean {
    return n1 < n2 ;
}

function le(n1:number, n2:number):Boolean {
    return n1 <= n2 ;
}
function eq(n1:number , n2:number):Boolean {
    return n1 == n2 ;
}

function ne(n1:number, n2:number):Boolean {
    return n1 != n2 ;
}

function testRelationalOps1() {
    console.log("<< relational ops >>");
    var n1:number= 20 , n2:number = 10 ;
    console.log("gt = ", gt(n1, n2));
    console.log("ge = ", ge(n1, n2));
    console.log("lt = " , lt(n1, n2));
    console.log("le = ", le(n1, n2));
    console.log("eq = ", eq(n1, n2));
    console.log("ne = ", ne(n1, n2));
    console.log();
}


testRelationalOps1();

class RelationalOps {
    n1:number ;
    n2:number;
    constructor(n1:number, n2:number) {
        this.n1 = n1 ;
        this.n2 = n2;
    }
    gt():Boolean {
        return this.n1 > this.n2 ;
    }

    ge():Boolean {
        return this.n1 >= this.n2 ;
    }

    lt():Boolean {
        return this.n1 < this.n2 ;
    }

    le():Boolean {
        return this.n1 <= this.n2 ;
    }

    eq():Boolean {
        return this.n1 == this.n2 ;
    }

    ne():Boolean {
        return this.n1 != this.n2 ;
    }
}

function testRelationalOps2() {
    console.log("<< relational ops 2 >>");
    var n1:number = 20 , n2 = 10;
    var ops = new RelationalOps(n1, n2);
    console.log("gt = ", ops.gt());
    console.log("ge = ", ops.ge());
    console.log("lt = ", ops.lt());
    console.log("le = ", ops.le());
    console.log("eq = ", ops.eq());
    console.log("ne = " , ops.ne());
    console.log();
}

testRelationalOps2(); 




//logical
function logicalFn(n1:number, n2:number, n3:number , n4:number) {
    var and = (n1 == n2) && (n3 == n4);
    var or = (n1 == n2) || (n3 == n4);
    var not = !(n1 == n2);
    console.log("and = ", and);
    console.log("or = ", or);
    console.log("not = ", not);
}

logicalFn(10, 10, 20, 30);


//otherOps
function otherOps() {
    n1 = 10 ;
    n2 = 20 ;
    var res = (n1 < n2)? "lt": "ge";
    console.log("ternary = ", res);
   console.log("typeof n1 = ", (typeof n1));
   console.log("typeof n2 = ", (typeof n2));
   var ops = new RelationalOps(n1, n2);
   console.log("instanceof RelationalOps = ", (ops instanceof RelationalOps));
   console.log("instanceof ArithmeticOps = ", (ops instanceof ArithmeticOps));
}

otherOps();