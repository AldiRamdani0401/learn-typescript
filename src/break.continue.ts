export function breakCounter(setCounter: number): void {
  let counter: number = 0;

  do {
    counter++;
    if (counter == setCounter) {
      break;
    }
    if (counter % 2 == 0) {
      continue;
    }
    console.info(counter);
  } while (true);
}
