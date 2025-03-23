export function counter(setCount: number): void {
  let counter: number = 0;
  while (counter <= setCount) {
    console.info(counter);
    counter++;
  }
}
