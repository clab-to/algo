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

  // 全要素に対して順次実行
  for (let index = boundary; index < sortList.length; index++) {
    // ソート済み配列の先頭の1つ次にあたる要素のインデックスと数値を記録
    [sortTargetNumber.index, sortTargetNumber.number] = [
      index,
      sortList[index],
    ];

    // 記録した要素の1つ手前（ソート済み配列）に対して、先頭から数値比較をしていく
    // 記録した数値の方が大きい場合は、
    let sortedElementIdx = sortTargetNumber.index - 1;
    while (
      sortedElementIdx >= 0 &&
      sortTargetNumber.number < sortList[sortedElementIdx]
    ) {
      // それの格納されている場所を1つ次にずらす（記録した数値が挿入できる箇所を作る）
      sortList[sortedElementIdx + 1] = sortList[sortedElementIdx];
      sortedElementIdx--;
    }

    // 記録した数値の方が小さい、若しくは一番小さい数字と比較しても大きい場合は
    // sortedElementIdxにて示す空いている箇所に数値を代入する
    sortList[sortedElementIdx + 1] = sortTargetNumber.number;
    console.log(sortList);
  }

  return sortList;
};

const target = new SortArgoTarget(30);
target.sort(intersectionSort);
