export enum TypeCount {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export interface ActionCount {
  type: TypeCount;
  payload?: number;
}
