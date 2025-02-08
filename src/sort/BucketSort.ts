// バケットソート
// バケットにまとめてからインサーションソートを実施する
//

import { SortArgoTarget } from "./common/sortArgoTarget";

const bucketSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);
  let sortListConcat: number[] = [];

  const max = Math.max(...sortList);
  const bucketSize = 8; // max/lenとかすると今回の仕様だとそれぞれの数値に1つのバケットになってただのソートになる
  const buckets: number[][] = [...Array(bucketSize)].map((_) => new Array());

  // insert to bucket

  for (const number of sortList) {
    let insertBacketsTarget = Math.floor(number / (max / bucketSize));
    if (insertBacketsTarget >= bucketSize) {
      insertBacketsTarget = bucketSize - 1;
    }
    console.log(
      `number: ${String(number).padStart(2, " ")}, insertBacketsTarget: ${insertBacketsTarget}`,
    );

    buckets[insertBacketsTarget].push(number);
  }

  console.log(buckets);

  // insertion
  for (const bucket of buckets) {
    const boundary = 1;

    const selectedNumber: { [name: string]: number | null } = {
      index: null,
      number: null,
    };

    for (let index = boundary; index < bucket.length; index++) {
      [selectedNumber.index, selectedNumber.number] = [index, bucket[index]];

      let swapTargetIndex = index;

      while (
        // swapTargetIndexに格納されている数値の1つ前のインデックスの要素を比較するので
        // 0を許すと-1番目の要素を参照する可能性が出てきて都合が悪い
        swapTargetIndex >= 1 &&
        bucket[swapTargetIndex - 1] > selectedNumber.number
      ) {
        bucket[swapTargetIndex] = bucket[swapTargetIndex - 1];
        swapTargetIndex--;
      }

      bucket[swapTargetIndex] = selectedNumber.number;
    }
    console.log(buckets);
  }

  for (const bucket of buckets) {
    sortListConcat = sortListConcat.concat(bucket);
  }
  console.log(sortListConcat);

  return sortListConcat;
};

const target = new SortArgoTarget(30);
target.sort(bucketSort);
