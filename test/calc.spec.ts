import Calc from "../src/Calc";

test("should successfully instantiate Calc class", () => {
    const calc = new Calc(1, 2);
    expect(calc).toBeInstanceOf(Calc);
});

test("should sum two values and return the result", () => {
    const calc = new Calc(2, 3);
    const sum = calc.sum();
    expect(sum).toBe(5);
});

test("should subtract two values and return the result", () => {
    const calc = new Calc(10, 2);
    const subtract = calc.subtract();
    expect(subtract).toBe(8);
});

test("should multiply two values and return the result", () => {
    const calc = new Calc(20, 2);
    const multiply = calc.multiply();
    expect(multiply).toBe(40);
});

test("should divide two values and return the result", () => {
    const calc = new Calc(20, 2);
    const divide = calc.divide();
    expect(divide).toBe(10);
});

test("should throw in cases of division by zero", () => {
    const calc = new Calc(20, 0);
    expect(() => calc.divide()).toThrow(new Error("Division by Zero"));
});

test("should exponentiate two values and return the result", () => {
    const calc = new Calc(20, 2);
    const exponentiate = calc.exponentiate();
    expect(exponentiate).toBe(400);
});
