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