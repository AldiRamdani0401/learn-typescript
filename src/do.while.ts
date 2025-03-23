export function doCounter(setCount: number): void {
  let counter: number = 0;
  do {
    console.info(counter);
    counter++;
  } while (counter <= setCount);
}
