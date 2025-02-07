// 選択ソート
// 一番小さいものを選択して（インデックスと値を一時的に覚えておいて）一番最初に持ってくる

import { SortArgoTarget } from "./common/sortArgoTarget";

const selectionSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);

  const selection: { [name: string]: number | null } = {
    number: null,
    index: null,
  };

  let lower_boundary = 0;

  while (true) {
    if (lower_boundary + 1 === sortList.length) {
      break;
    }

    [selection.number, selection.index] = [null, null];

    for (let i = lower_boundary; i < sortList.length; i++) {
      if (selection.number === null) {
        [selection.number, selection.index] = [sortList[i], i];
      }

      if (selection.number > sortList[i]) {
        [selection.number, selection.index] = [sortList[i], i];
      }
    }

    if (
      typeof selection.index === "number" &&
      selection.index !== lower_boundary
    ) {
      [sortList[selection.index], sortList[lower_boundary]] = [
        sortList[lower_boundary],
        sortList[selection.index],
      ];
    }

    console.log(sortList);

    lower_boundary++;
  }
  return sortList;
};

const target = new SortArgoTarget(30);
target.sort(selectionSort);
