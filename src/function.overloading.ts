export function callMe(value: number): number;
export function callMe(value: string): string;
export function callMe(value: any): any {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  }
}
