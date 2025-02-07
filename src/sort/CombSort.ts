// コムソート
// 櫛を解かしていくようなイメージ
// ざっくり整えてから徐々に細かく整えていく
// Gapで割る、櫛の幅が狭くなっていくような...

import { SortArgoTarget } from "./common/sortArgoTarget";

const combSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);

  // なんか色々試したうちで一番効率いいらしい
  const shrinkFactor = 1.3;
  let gap = sortList.length;

  const swap = (index: number): boolean => {
    if (sortList[index] > sortList[index + gap]) {
      [sortList[index], sortList[index + gap]] = [
        sortList[index + gap],
        sortList[index],
      ];
      return true;
    }
    return false;
  };

  while (true) {
    if (gap !== 1) {
      gap = Math.floor(gap / shrinkFactor);
      for (let i = 0; i + gap < sortList.length; i++) {
        swap(i);
      }
      console.log(sortList);
    } else {
      let swapped = false;
      for (let i = 0; i + gap < sortList.length; i++) {
        swapped = swap(i) || swapped;
      }
      console.log(sortList);
      if (!swapped) {
        break;
      }
    }
  }
  return sortList;
};

const target = new SortArgoTarget(30);
target.sort(combSort);
