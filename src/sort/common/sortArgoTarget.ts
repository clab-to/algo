const base_list = [1, 3, 2, 4, 5];

export class SortArgoTarget {
  list: number[];

  constructor(list_length?: number) {
    if (list_length === undefined) {
      this.list = base_list;
    } else {
      this.list = this._shuffle(this._generateSequentialArray(list_length));
    }
  }

  _generateSequentialArray(arrayLength: number): number[] {
    return [...Array(arrayLength)].map((_, i) => i + 1);
  }

  _shuffle(list: number[]): number[] {
    const shuffled_list: number[] = [];

    while (list.length > 0) {
      const key = Math.floor(Math.random() * list.length);
      shuffled_list.push(list[key]);
      list.splice(key, 1);
    }

    return shuffled_list;
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
