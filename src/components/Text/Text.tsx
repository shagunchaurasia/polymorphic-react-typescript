import React from "react";

export const Text = ({
  as,
  children,
}: {
  as?: any;
  children: React.ReactNode;
}) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};
