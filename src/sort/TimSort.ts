import { SortArgoTarget } from "./common/sortArgoTarget";

const timSort = (list: number[]): number[] => {
  const sortList = structuredClone(list);
  return [];
};

const target = new SortArgoTarget(30);
target.sort(timSort);
