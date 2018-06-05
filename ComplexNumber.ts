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
