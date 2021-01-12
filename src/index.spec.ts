import { systemUnderTest, FizzBuzz, isMultipleOf } from ".";

describe("Test of systemUnderTest()", function () {
  it("Should pass", function () {
    expect(systemUnderTest()).toEqual(true);
  });
});

describe("Test of isMultipleOf(multiple, n)", function () {
  it("if multiple = 3 and nb = 15 should return true", function () {
    expect(isMultipleOf(3, 15)).toEqual(true);
  });

  it("if multiple = 3 and nb = 14 should return false", function () {
    expect(isMultipleOf(3, 14)).toEqual(false);
  });
});

describe("Test of FizzBuzz(n)", function () {
  it("if n is multiple of 3 return Fizz", function () {
    expect(FizzBuzz(3)).toEqual("Fizz");
  });

  it("if n is multiple of 5 return Buzz", function () {
    expect(FizzBuzz(5)).toEqual("Buzz");
  });

  it("if n is multiple of 15 return Buzz", function () {
    expect(FizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("if n is not multiple of 3 or 5 return n", function () {
    expect(FizzBuzz(1)).toEqual(1);
  });

  it("if n is negetive should return an exception: 'n need to be positive'", function () {
    expect(() => FizzBuzz(-5)).toThrow('n need to be positive')
  })
});



