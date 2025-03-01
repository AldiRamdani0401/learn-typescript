export function sayHello(name?: string) {
  if (name) {
    console.info(`Hello ${name} | type : ${typeof name}`);
  } else {
    console.info(`Hello | type : ${typeof name}`);
  }
}
