export function loop(datas: string[]): void {
  for (let i = 0; i < datas.length; i++) {
    console.info(datas[i]);
  }

  for (const data of datas) {
    console.info(data);
  }

  for (const index in datas) {
    console.info(datas[index]);
  }
}
