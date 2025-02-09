/**
 * クイックソート（降順、昇順は色々逆にする）
 * 1. 任意のpivot(基準値)を選択する（与えられた配列のど真ん中とか右端とか左端とか）
 * 2. pivotに対して、それより大きいグループと小さいグループに分ける
 *   1. 左から順に、pivotとして指定した値以下の値が出てくるまで線形探索
 *   2. pivot以下の数値が発見できたら、右から順にpivotの値以上の値が発見できるまで探索
 *   3. pivot以上、以下の値がそれぞれ発見できたら、
 *     1. pivot以下の値の発見位置とpivot以上の値の発見位置を比較して、
 *        indexの指定が `以下 < 以上` となっていないか確認
 *        (以下の探索位置、以上の探索位置がまたがっていないか)
 *     2. またがっていなければ入れ替え
 *     3. またがっていれば、グループ分けは完了として扱い、breakする
 *   4. 繰り返し
 * 3. グループ分けしたものに対して同様のグループ分け処理を実施し続ける
 * 4. グループの大きさが2〜1になったら終了
 */

import { SortArgoTarget } from "./common/sortArgoTarget";

const quickSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);

  const swap = (a: number, b: number) => {
    [sortList[a], sortList[b]] = [sortList[b], sortList[a]];
  };

  const quickSortReccursive = (
    pivotIndex: number,
    groupUpperIndex: number,
    groupLowerIndex: number,
  ) => {
    console.log("");
    console.log("# # # # # # # # # #");
    console.log("quickSortReccursive");
    console.log(`pivotIndex: ${pivotIndex}`);
    console.log(`groupUpperIndex: ${groupUpperIndex}`);
    console.log(`groupLowerIndex: ${groupLowerIndex}`);
    console.log("sortList:");
    console.log(sortList.slice(groupLowerIndex, groupUpperIndex + 1));
    const pivot = sortList[pivotIndex];

    let [searchLowerIndex, searchUpperIndex] = [
      groupLowerIndex,
      groupUpperIndex,
    ];

    while (true) {
      while (
        sortList[searchLowerIndex] < pivot &&
        searchLowerIndex + 1 !== searchUpperIndex
      ) {
        searchLowerIndex++;
      }
      while (
        pivot < sortList[searchUpperIndex] &&
        searchLowerIndex + 1 !== searchUpperIndex
      ) {
        searchUpperIndex--;
      }

      console.log(`pivot: ${pivot}`);
      console.log(
        `searchLowerIndex: ${String(searchLowerIndex).padStart(2, " ")}, number: ${sortList[searchLowerIndex]}`,
      );
      console.log(
        `searchUpperIndex: ${String(searchUpperIndex).padStart(2, " ")}, number: ${sortList[searchUpperIndex]}`,
      );

      if (searchLowerIndex + 1 === searchUpperIndex) {
        if (
          sortList[searchLowerIndex] >= pivot &&
          pivot >= sortList[searchUpperIndex]
        ) {
          swap(searchLowerIndex, searchUpperIndex);
          console.log("swapped:");
          console.log(sortList.slice(groupLowerIndex, groupUpperIndex + 1));
        }
        break;
      }

      swap(searchLowerIndex, searchUpperIndex);

      console.log("swapped:");
      console.log(sortList.slice(groupLowerIndex, groupUpperIndex + 1));
    }

    console.log("");
    console.log("sortList:");
    console.log(sortList.slice(groupLowerIndex, groupUpperIndex + 1));

    if (searchLowerIndex - groupLowerIndex > 0) {
      quickSortReccursive(
        Math.floor((searchLowerIndex + groupLowerIndex) / 2),
        searchLowerIndex,
        groupLowerIndex,
      );
    }
    if (groupUpperIndex - searchUpperIndex > 0) {
      quickSortReccursive(
        Math.floor((searchUpperIndex + groupUpperIndex) / 2),
        groupUpperIndex,
        searchUpperIndex,
      );
    }
  };

  quickSortReccursive(Math.round(sortList.length / 2), sortList.length - 1, 0);
  console.log("result");
  console.log(sortList);
  return sortList;
};

const target = new SortArgoTarget(30);
target.sort(quickSort);
