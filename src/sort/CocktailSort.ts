// カクテルソート
// シェイカーソートとか
// バブルソートを振るやつ
// 上下順番に揃っていく

import { SortArgoTarget } from "./common/sortArgoTarget";

const cocktailSort = (list: number[]): number[] => {
  const limit = {
    upper: list.length,
    lower: 0,
  };

  const targetList = structuredClone(list);

  const bubble = () => {
    let swapped = false;
    for (let i = limit.lower; i < limit.upper; i++) {
      swapped = sortIfNeeded(i) || swapped;
    }
    limit.upper--;
    return swapped;
  };

  const downSideBubble = () => {
    let swapped = false;
    for (let i = limit.upper - 1; limit.lower <= i; i--) {
      swapped = sortIfNeeded(i) || swapped;
    }
    limit.lower++;
    return swapped;
  };

  const sortIfNeeded = (i: number): boolean => {
    if (targetList[i] > targetList[i + 1]) {
      [targetList[i], targetList[i + 1]] = [targetList[i + 1], targetList[i]];
      return true;
    }
    return false;
  };

  const sortLoggingWrapper = (func: () => boolean) => {
    const result = func();
    console.log(targetList);
    return result;
  };

  while (true) {
    if (!sortLoggingWrapper(bubble)) {
      break;
    }
    if (!sortLoggingWrapper(downSideBubble)) {
      break;
    }
  }
  return targetList;
};

const target = new SortArgoTarget(30);
target.sort(cocktailSort);
