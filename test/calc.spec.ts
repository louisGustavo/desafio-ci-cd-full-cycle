import Calc from "../src/Calc";

test("should successfully instantiate Calc class", () => {
    const calc = new Calc();
    expect(calc).toBeInstanceOf(Calc);
});
