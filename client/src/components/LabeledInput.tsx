import { ILabeledInput } from "../types/types";

const LabeledInput = ({ id, label, plcaeholder = "", name }: ILabeledInput) => {
  return (
    <label htmlFor={id} className="w-[90%]">
      <p className="font-semibold">{label}</p>
      <input
        className="my-3 w-full rounded-md border p-2 outline-none"
        id={id}
        type="text"
        placeholder={plcaeholder}
        name={name}
      />
    </label>
  );
};

export default LabeledInput;
