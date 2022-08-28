import React from "react";

export const Text = <GenericComponent extends React.ElementType>({
  as,
  children,
}: {
  as?: GenericComponent,
  children: React.ReactNode;
}) => {
  const Component = as || "span";
  return <Component >{children}</Component>;
};
