const base_list = [1, 3, 2, 4, 5];

export class SortArgoTarget {
  list: number[];

  constructor(list?: number[]) {
    if (list === undefined) {
      this.list = base_list;
    } else {
      this.list = list;
    }
  }

  isSorted(): boolean {
    for (let i = 0; i < this.list.length - 1; i++) {
      if (this.list[i] > this.list[i + 1]) {
        return false;
      }
    }
    return true;
  }

  sort(func: (list: number[]) => number[]): void {
    let count = 0;
    while (true) {
      count++;
      console.log(this.list);
      this.list = func(this.list);
      if (this.isSorted()) {
        console.log(`Sorted! index: ${count}`);
        return;
      }

      if (count > 10000) {
        console.log("Too many iterations");
        return;
      }
    }
  }
}
