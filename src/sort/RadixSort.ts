/**
 * 基数ソート
 */

import { SortArgoTarget } from "./common/sortArgoTarget";

const radixSort = (list: number[]): number[] => {
  /**
   * listに入っている数値のうち、最大数の桁数を返す
   * intがくる想定なので文字列長をそのまま桁数として扱う
   * @returns
   */
  function maxDigits(list: number[]) {
    return Math.max(...list).toString().length;
  }

  let resultList = structuredClone(list);

  for (let digit = 1; digit <= maxDigits(resultList); digit++) {
    const sortList = new SortTargetList(structuredClone(resultList));
    const findCountByDigit = [...Array(10)].map((_) => 0);

    for (let index = 0; index < resultList.length; index++) {
      findCountByDigit[sortList.getSelectDigit(index, digit)]++;
    }

    console.log("findCountByDigit:");
    console.log(findCountByDigit);

    const insertTargetIndexesByDigit = [...Array(10)].map((_) => 0);
    for (let index = 0; index < findCountByDigit.length; index++) {
      if (index === 0) {
        insertTargetIndexesByDigit[index] = -1 + findCountByDigit[index];
      } else {
        insertTargetIndexesByDigit[index] =
          findCountByDigit[index] + insertTargetIndexesByDigit[index - 1];
      }
    }

    console.log("insertTargetIndexesByDigit:");
    console.log(insertTargetIndexesByDigit);

    const temp: number[] = sortList.getZeroList();
    console.log("temp:");
    console.log(temp);
    console.log("resultList:");
    console.log(resultList);

    for (let index = resultList.length - 1; index >= 0; index--) {
      console.log(`index: ${index}`);
      console.log(`pickuped number: ${resultList[index]}`);
      console.log(
        `hit digits number: ${sortList.getSelectDigit(index, digit)}`,
      );
      console.log(
        `insert to : ${insertTargetIndexesByDigit[sortList.getSelectDigit(index, digit)]}`,
      );
      console.log("# # # # # # # # # # #");
      temp[insertTargetIndexesByDigit[sortList.getSelectDigit(index, digit)]] =
        resultList[index];
      insertTargetIndexesByDigit[sortList.getSelectDigit(index, digit)]--;
    }

    resultList = structuredClone(temp);

    console.log("temp:");
    console.log(temp);
    console.log("resultList:");
    console.log(resultList);
  }

  return resultList;
};

class SortTargetList {
  list: number[];

  constructor(list: number[]) {
    this.list = list;
  }

  getZeroList() {
    return [...Array(Math.max(...this.list))].map((_) => 0);
  }

  length() {
    return this.list.length;
  }

  /**
   * listに入っている数値のうち、最大数の桁数を返す
   * intがくる想定なので文字列長をそのまま桁数として扱う
   * @returns
   */
  maxDigits() {
    return Math.max(...this.list).toString().length;
  }

  /**
   * 指定したインデックスの桁の数値。該当する桁に数値がない場合は0を返す。
   * 12345という数値があるときに、1を指定すると5が返る。
   * 3を指定したら3という具合。
   *
   * Note:
   * 0が指定されたら全部返るけど意図してない。でもそのままにしてる。
   *
   * @param index
   * @param digit
   * @returns
   */
  getSelectDigit(index: number, digit: number) {
    const paddingNumber = String(this.list[index]).padStart(
      this.maxDigits(),
      "0",
    );
    return Number.parseInt(
      paddingNumber.slice(-digit, paddingNumber.length - (digit - 1)),
    );
  }
}

const target = new SortArgoTarget(30);
target.sort(radixSort);
