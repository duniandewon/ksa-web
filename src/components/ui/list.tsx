import React, { Key, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

interface Props<T>
  extends React.OlHTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  data: T[];
  render: (data: T) => ReactNode;
  keyExtractor: (data: T) => Key;
}

const listVariants = cva("flex gap-4", {
  variants: {
    variant: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    variant: "vertical",
  },
});

export const List = <T extends unknown>({
  data,
  render,
  keyExtractor,
  variant,
  className,
}: Props<T>) => {
  return (
    <ul className={cn(listVariants({ variant, className }))}>
      {data.map((item) => (
        <li key={keyExtractor(item)}>{render(item)}</li>
      ))}
    </ul>
  );
};
