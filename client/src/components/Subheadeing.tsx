import { ISubheading } from "../types/types";

const Subheadeing = ({ text, style }: ISubheading) => {
  return <p className={`   text-zinc-400 ${style}`}>{text}</p>;
};

export default Subheadeing;
