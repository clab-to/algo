// ノームソート
// 入れ替えがあったら1つ戻る

import { SortArgoTarget } from "./common/sortArgoTarget";

const gnomeSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);

  let swapped = false;

  for (let i = 0; i < sortList.length; swapped ? i-- : i++) {
    swapped = false;
    if (sortList[i] > sortList[i + 1]) {
      [sortList[i], sortList[i + 1]] = [sortList[i + 1], sortList[i]];
      swapped = true;
      console.log(sortList);
    }
  }

  return sortList;
};

const target = new SortArgoTarget(10);
target.sort(gnomeSort);
