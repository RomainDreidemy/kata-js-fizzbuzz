export function systemUnderTest(): boolean {
  return true;
}

export function FizzBuzz(n: number): string | number {
  let result: string = "";

  if (n < 0)
    throw new Error("n need to be positive")

  if (isMultipleOf(3, n))
    result += "Fizz";

  if (isMultipleOf(5, n))
    result += "Buzz";

  return result || n;
}

export function isMultipleOf(multiple: number, nb: number): boolean {
  return nb % multiple === 0;
}