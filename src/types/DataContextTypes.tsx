import { DataType } from "./DataTypes";

export interface DataContextType {
  countries: DataType[];
  mode: boolean;
  result: DataType[];
  handleChangeMode: () => void;
  setResult: (result: DataType[]) => void;
}
