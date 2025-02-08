import { SortArgoTarget } from "./common/sortArgoTarget";

const radixSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);
  return [];
};

const target = new SortArgoTarget(30);
target.sort(radixSort);
