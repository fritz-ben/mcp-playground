import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const headlineVariants = cva(
  // Base classes
  [
    'title-2-italic', // Uses design token text style
    'transition-all',
    'duration-300',
    'ease-[cubic-bezier(0.4,0,0.2,1)]', // Smooth cubic-bezier transition
    'hover:title-2-retalic', // Hover effect with retalic style
    'cursor-pointer',
  ],
  {
    variants: {
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      align: 'center',
    },
  }
);

export interface HeadlineProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headlineVariants> {
  /** The text content of the headline */
  children: React.ReactNode;
}

export const Headline: React.FC<HeadlineProps> = ({
  children,
  align,
  className,
  ...props
}) => {
  return (
    <h2
      className={clsx(headlineVariants({ align }), className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Headline;
