export function selectNumber(statement: number): string {
  switch (statement) {
    case 1:
      return "anda pilih 1";
    case 2:
      return "anda pilih 2";
    default:
      return "anda harus memilih antara 1 atau 2";
  }
}
