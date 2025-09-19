import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const headlineVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'relative',
    'w-full',
  ],
  {
    variants: {
      alignment: {
        left: 'justify-start text-left',
        center: 'justify-center text-center',
        right: 'justify-end text-right',
      },
    },
    defaultVariants: {
      alignment: 'center',
    },
  }
);

interface HeadlineProps extends VariantProps<typeof headlineVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Headline: React.FC<HeadlineProps> = ({
  children,
  alignment,
  className,
}) => {
  return (
    <div className={clsx(headlineVariants({ alignment }), className)}>
      <h2
        className={clsx(
          'flex-grow',
          'basis-0',
          'min-h-px',
          'min-w-px',
          'title-1-italic hover:title-1-retalic',
          'transition-all',
          'ease-[cubic-bezier(0.4,0,0.2,1)]',
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export default Headline;
