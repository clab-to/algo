// カクテルソート
// シェイカーソートとか
// バブルソートを振るやつ
// 上下順番に揃っていく

import { SortArgoTarget } from "./common/sortArgoTarget";

const cocktailSort = (list: number[]): number[] => {
  const targetList = structuredClone(list);

  const limit = {
    upper: targetList.length,
    lower: 0,
  };

  const bubble = () => {
    let swapped = false;
    for (let i = limit.lower; i < limit.upper; i++) {
      if (targetList[i] > targetList[i + 1]) {
        swapped = true;
        [targetList[i], targetList[i + 1]] = [targetList[i + 1], targetList[i]];
      }
    }
    limit.upper--;
    return swapped;
  };

  const downSideBubble = () => {
    let swapped = false;
    for (let i = limit.upper; limit.lower < i; i--) {
      if (targetList[i - 1] > targetList[i]) {
        swapped = true;
        [targetList[i], targetList[i - 1]] = [targetList[i - 1], targetList[i]];
      }
    }
    limit.lower++;
    return swapped;
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
