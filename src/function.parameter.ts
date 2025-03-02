export function sayHello(name: string = "Guest"): string {
  return `Hello ${name}`;
}

export function sum(...values: number[]): number {
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
}

export function greeting(firstName: string, lastName?: string): string {
  if (lastName) {
    return `Hello ${firstName} ${lastName}`;
  } else {
    return `Hello ${firstName}`;
  }
}
