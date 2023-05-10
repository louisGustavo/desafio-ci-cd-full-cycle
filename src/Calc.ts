export default class Calc {
    private readonly number1: number;
    private readonly number2: number;

    constructor(number1: number, number2: number) {
        this.number1 = number1;
        this.number2 = number2;
    }

    public sum(): number {
        return this.number1 + this.number2;
    }

    public subtract(): number {
        return this.number1 - this.number2;
    }

    public multiply(): number {
        return this.number1 * this.number2;
    }

    public divide(): number {
        this.divisionByZeroException();
        return this.number1 / this.number2;
    }

    private divisionByZeroException() {
        if (this.number1 === 0 || this.number2 === 0) {
            throw new Error("Division by Zero");
        }
    }

    public exponentiate(): number {
        return this.number1 ** this.number2;
    }
}
