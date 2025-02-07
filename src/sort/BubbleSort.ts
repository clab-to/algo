// バブルソート
// 大きい数字を端に寄せていく（泡が浮いていく）感じ
// ループが回るごとにチェックする対象を1つずつ減らしていく

import { SortArgoTarget } from "./common/sortArgoTarget";

const bubbleSort = (list: number[]) => {
  let limit = list.length - 1;
  const sortedList: number[] = structuredClone(list);

  console.log("bubble sort process start!");
  console.log("##########################");
  while (true) {
    console.log(sortedList);
    for (let i = 0; i <= limit; i++) {
      if (sortedList[i] >= sortedList[i + 1]) {
        [sortedList[i + 1], sortedList[i]] = [sortedList[i], sortedList[i + 1]];
      }
    }

    limit--;
    if (limit <= 2) {
      break;
    }
  }
  console.log("##########################");
  console.log("bubble sort process finish!");
  return sortedList;
};

const target = new SortArgoTarget(30);
target.sort(bubbleSort);
