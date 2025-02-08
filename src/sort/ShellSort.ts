// shellソート
// gap込みのinsertionsortって感じ
// list長を２で割って小数点以下切り捨てでまとめた数値をgapとして、
// 処理が一巡終わるごとにgapを２で割って小数点以下切り捨てしていく。

import { SortArgoTarget } from "./common/sortArgoTarget";

const shellSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);

  const calcGap = (gap: number) => {
    return Math.floor(gap / 2);
  };

  let gap = calcGap(sortList.length);
  console.log(gap);

  const boundary = 1;
  while (gap >= 1) {
    for (let index = gap + boundary; index < sortList.length; index += gap) {
      const temporaryPickedNumber: { [name: string]: number } = {
        index: index,
        number: sortList[index],
      };

      console.log(`index: ${index}, gap: ${gap}`);

      let target = index;
      while (
        target - gap >= 0 &&
        sortList[target - gap] < temporaryPickedNumber.number
      ) {
        sortList[target] = sortList[target - gap];
        target -= gap;
      }

      sortList[target] = temporaryPickedNumber.number;
    }
    console.log(sortList);
    gap = calcGap(gap);
  }

  return sortList;
};

const target = new SortArgoTarget(30);
target.sort(shellSort);
