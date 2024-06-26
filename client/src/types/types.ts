import React from "react";
export interface IHeading {
  text: string;
  style?: string;
}
export interface ISubheading {
  text: string;
  style?: string;
}
export interface ILabeledInput {
  label: string;
  plcaeholder?: string;
  id: string;
  name: string;
}
export interface IBalance {
  amount: number;
  title?: string;
}
export interface IModal {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
