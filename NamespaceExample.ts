//import ComplexNumber = com.edutilos.src.ComplexNumber;
export namespace com {
    export namespace edutilos {
        export namespace src {
            export class ComplexNumber {
                private real:number
                private im:number;

                constructor(real:number= 0, im:number = 0) {
                    this.real = real ;
                    this.im = im ;
                }

                add(other:ComplexNumber):any {
                    var res:ComplexNumber = new ComplexNumber(0, 0);
                    res.real = this.real + other.real ;
                    res.im = this.im + other.im ;
                    return res;
                }

                subtract(other:ComplexNumber):any {
                    var res:ComplexNumber = new ComplexNumber(0, 0);
                    res.real = this.real - other.real ;
                    res.im = this.im - other.im ;
                    return res ;
                }

                multiply(other:ComplexNumber):any {
                    var res =  new ComplexNumber();
                    res.real = this.real*other.real - this.im*other.im;
                    res.im = this.real*other.im + this.im*other.real;
                    return res;
                }

                toString():string {
                    return this.real + " + i*"+ this.im ;
                }
            }

            export class SimpleMath {
                private n1:number ;
                private n2:number ;
                constructor(n1:number = 0, n2:number = 0) {
                    this.n1 = n1 ;
                    this.n2 = n2 ;
                }

                add() {
                    return this.n1 + this.n2 ;
                }

                subtract() {
                    return this.n1 - this.n2 ;
                }

                multiply() {
                    return this.n1 * this.n2 ;
                }
                divide() {
                    return this.n1 / this.n2 ;
                }
            }


            export class ComplexNumber2 {
                private _real:number
                private _im:number
                public constructor(real:number, im:number) {
                    this._real = real
                    this._im = im
                }

                public get real():number {
                    return this._real
                }
                public get im() {
                    return this._im
                }

                public set real(real:number) {
                    this._real = real
                }
                public set im(im:number) {
                    this._im = im
                }

                public add(other:ComplexNumber2): ComplexNumber2 {
                    var res = new ComplexNumber2(0,0)
                    res.real = this.real + other.real
                    res.im = this.im + other.im
                    return res
                }

                public sub(other:ComplexNumber2): ComplexNumber2 {
                    var res = new ComplexNumber2(0,0)
                    res.real = this.real - other.real
                    res.im = this.im - other.im
                    return res
                }


                public mul(other:ComplexNumber2): ComplexNumber2 {
                    var res = new ComplexNumber2(0,0)
                    res.real = this.real*other.real - this.im*other.im
                    res.im = this.real*other.im + this.im*other.real
                    return res
                }

                public div(other:ComplexNumber2):ComplexNumber2 {
                    var temp = Math.pow(other.real, 2)+  Math.pow(other.im, 2)
                    var res = this.mul(new ComplexNumber2(other.real, -other.im))
                    return new ComplexNumber2(res.real/temp, res.im/temp)
                }

                public str():string {
                    return this.real + " + i*"+ this.im
                }
            }

        }
    }
}


export function testNamespace() {
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

    var ComplexNumber2 = com.edutilos.src.ComplexNumber2
    var cn3 = new ComplexNumber2(10, 10)
    var cn4 = new ComplexNumber2(3, 3)
    var cnAdd = cn3.add(cn4)
    //that does not work: var cnSub:ComplexNumber2 = cn3.sub(cn4)
    var cnSub:com.edutilos.src.ComplexNumber2 = cn3.sub(cn4)
    var cnMul = cn3.mul(cn4)
    var cnDiv = cn3.div(cn4)
    console.log("cn3 = ", cn3.str())
    console.log("cn4 = ", cn4.str())
    console.log("cn3 + cn4 = ", cnAdd.str())
    console.log("cn3 - cn4 = ", cnSub.str())
    console.log("cn3 * cn4 = ", cnMul.str())
    console.log("cn3 / cn4 = ", cnDiv.str())
}

// testNamespace();