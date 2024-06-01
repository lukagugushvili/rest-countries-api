import { DataType } from "./DataTypes";

export interface DataContextType {
  countries: DataType[];
  mode: boolean;
  handleChangeMode: () => void;
}
