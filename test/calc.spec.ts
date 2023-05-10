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
