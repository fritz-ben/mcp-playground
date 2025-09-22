import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";

const headlineVariants = cva(
  "title-2-italic transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:title-2-retalic",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      align: "center",
    },
  },
);

export interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headlineVariants> {
  children: ReactNode;
}

export default function Headline({ children, align, className, ...props }: HeadlineProps) {
  return (
    <h2 className={headlineVariants({ align, className })} {...props}>
      {children}
    </h2>
  );
}
