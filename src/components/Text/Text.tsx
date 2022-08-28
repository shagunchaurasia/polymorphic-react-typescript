import React from "react";

type Rainbow =
  | "violet"
  | "indigo"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<
  C extends React.ElementType,
  Props
> = keyof (AsProp<C> & Props);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TextProps = {
  color?: Rainbow | "black";
};

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];


type PolymorphicComponentPropsWithRef<C extends React.ElementType,P> = PolymorphicComponentProps<C,P> & {ref?:PolymorphicRef<C>}

type TextComponent = <C extends React.ElementType>(props:PolymorphicComponentPropsWithRef<C,TextProps>)=> React.ReactElement| null;

export const Text : TextComponent= React.forwardRef(<C extends React.ElementType = "span">({
  as,
  style,
  color,
  children,
  ...restProps
}: PolymorphicComponentProps<C, TextProps >, ref?:PolymorphicRef<C>) => {
  const Component = as || "span";

  const internalStyles = color
    ? { style: { ...style, color } }
    : style
    ? { style: { ...style } }
    : {};

  return (
    <Component {...restProps} {...internalStyles}>
      {children} ref={ref}
    </Component>
  );
})
