// Bogo ：適当に並び替える
// 猿でもできる
// 1. 配列がソートされているか確認
// 2. ソートされていない場合、配列をシャッフル
// 3. 1に戻る
// 4. ソートされている場合、終了

import { SortArgoTarget } from "./common/sortArgoTarget";

const bogoSort = (list: number[]): number[] => {
  const result_list: number[] = [];
  while (list.length > 0) {
    const key = Math.floor(Math.random() * list.length);
    result_list.push(list[key]);
    list.splice(key, 1);
  }
  return result_list;
};

const target = new SortArgoTarget(10);
target.sort(bogoSort);
