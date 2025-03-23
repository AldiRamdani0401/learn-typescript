export function sayHello(name: string, filter: (name: string) => string) {
  return `Hello ${filter(name)}`;
}
