// 挿入ソート
// 各要素分の移動処理が各要素のループ分実施されるのでO(n^2)

import { SortArgoTarget } from "./common/sortArgoTarget";

const intersectionSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);

  const boundary = 1;

  const sortTargetNumber: { [name: string]: number | null } = {
    index: null,
    number: null,
  };

  for (let index = boundary; index < sortList.length; index++) {
    [sortTargetNumber.index, sortTargetNumber.number] = [
      index,
      sortList[index],
    ];

    let sortedElementIdx = sortTargetNumber.index - 1;
    while (
      sortedElementIdx >= 0 &&
      sortTargetNumber.number < sortList[sortedElementIdx]
    ) {
      sortList[sortedElementIdx + 1] = sortList[sortedElementIdx];
      sortedElementIdx--;
    }
    sortList[sortedElementIdx + 1] = sortTargetNumber.number;
    console.log(sortList);
  }

  return sortList;
};

const target = new SortArgoTarget(30);
target.sort(intersectionSort);
