import { IBalance } from "../types/types";

const Balance = ({ title = "", amount }: IBalance) => {
  return (
    <div className="flex gap-2">
      <h2 className="font-xl font-bold">{title}</h2>
      <strong>${amount}</strong>
    </div>
  );
};

export default Balance;
