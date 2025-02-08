// shellソート
// gap込みのinsertionsortって感じ
// list長を２で割って小数点以下切り捨てでまとめた数値をgapとして、
// 処理が一巡終わるごとにgapを２で割って小数点以下切り捨てしていく。

import { SortArgoTarget } from "./common/sortArgoTarget";

const shellSort = (list: number[]): number[] => {
  let times = 0;
  const sortList = structuredClone(list);

  const calcGap = (gap: number) => {
    return Math.floor(gap / 1.3);
  };

  let gap = calcGap(sortList.length);

  while (gap >= 1) {
    for (let index = gap; index < sortList.length; index += gap) {
      const temporaryPickedNumber: { [name: string]: number } = {
        index: index,
        number: sortList[index],
      };

      let target = index;
      while (
        target - gap >= 0 &&
        sortList[target - gap] > temporaryPickedNumber.number
      ) {
        times++;
        sortList[target] = sortList[target - gap];
        target -= gap;
      }

      sortList[target] = temporaryPickedNumber.number;
    }
    console.log(sortList);
    gap = calcGap(gap);
  }

  console.log(`times: ${times}`);
  return sortList;
};

const target = new SortArgoTarget(30);
target.sort(shellSort);
