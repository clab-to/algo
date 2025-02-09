/**
 * カウントソート
 * 数値の登場回数を数えて、数値の位置の参照として利用するオブジェクトを作成。
 * 最後に位置参照用オブジェクトを参照しながらソートを実施。
 */

import { SortArgoTarget } from "./common/sortArgoTarget";

const countSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);

  const countingList: number[] = [...new Array(Math.max(...sortList))].map(
    (_) => 0,
  );
  const positionByNumberList: number[] = new Array(Math.max(...sortList));

  for (const number of sortList) {
    countingList[number - 1]++;
  }

  for (let index = 0; index < positionByNumberList.length; index++) {
    if (index === 0) {
      positionByNumberList[index] = countingList[index];
    } else {
      positionByNumberList[index] =
        countingList[index] + positionByNumberList[index - 1];
    }
  }

  const resultList: number[] = new Array(Math.max(...sortList));
  for (let index = 0; index < sortList.length; index++) {
    const number = sortList[index];
    resultList[positionByNumberList[number - 1] - 1] = number;
    positionByNumberList[number - 1]--;
  }

  console.log(resultList);

  return resultList;
};

const target = new SortArgoTarget(30);
target.sort(countSort);
