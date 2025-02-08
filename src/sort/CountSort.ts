import { SortArgoTarget } from "./common/sortArgoTarget";

const countSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);
  return [];
};

const target = new SortArgoTarget(30);
target.sort(countSort);
