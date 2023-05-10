export default class Calc {
    number1: number;
    number2: number;

    constructor(number1: number, number2: number) {
        this.number1 = number1;
        this.number2 = number2;
    }

    sum(): number {
        return this.number1 + this.number2;
    }
}
