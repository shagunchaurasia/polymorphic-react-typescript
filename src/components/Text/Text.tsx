import React from "react";

type TextProps<GenericComponent extends React.ElementType> = {
  as?: GenericComponent;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<GenericComponent>;

export const Text = <GenericComponent extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: TextProps<GenericComponent>) => {
  const Component = as || "span";
  return <Component {...restProps}>{children}</Component>;
};
