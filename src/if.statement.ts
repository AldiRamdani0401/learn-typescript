export function grade(grade: number): string {
  if (grade > 80) {
    return "Good";
  } else if (grade > 60) {
    return "Not Bad";
  } else {
    return "Try Again";
  }
}
