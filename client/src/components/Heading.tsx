import { IHeading } from "../types/types";

const Heading = ({ text, style }: IHeading) => {
  return <h1 className={`text-2xl font-bold ${style}`}>{text}</h1>;
};

export default Heading;
