export function sayHello(name?: string | null) {
    if (name) {
      console.info(`Hello ${name} | type : ${typeof name}`);
    } else {
      console.info(`Hello ${name} | type : ${typeof name}`);
    }
  }
  