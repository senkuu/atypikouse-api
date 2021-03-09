import React, { InputHTMLAttributes } from "react";
import tw from "twin.macro";
import Icon from "@material-ui/core/Icon";

import { useField } from "formik";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  icon: string;
};

const Label = tw.label`text-xs font-semibold px-1`;
const PositionInput = tw.div`flex`;
const PositionIcon = tw.div`w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center`;
const Input = tw.input`w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-Green-default`;

function InputField({ label, icon, ...props }: InputFieldProps) {
  const [field, { error }] = useField(props);

  return (
    <>
      <Label htmlFor={field.name}>{label}</Label>
      <PositionInput>
        <PositionIcon>
          <Icon>{icon}</Icon>
        </PositionIcon>
        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder ?? ""}
        />
      </PositionInput>
    </>
  );
}

export default InputField;
