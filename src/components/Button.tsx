import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'relative',
    'box-border',
    'px-8',
    'py-4',
    'rounded-lg',
    'border-2',
    'button-base',
    'text-nowrap',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-(--color-digital-blue)',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-(--color-bluish-white-100)',
          'text-(--color-deep-blue)',
          'border-(--color-bluish-white-100)',
          'hover:bg-transparent',
          'hover:text-(--color-bluish-white-100)',
          'hover:border-(--color-bluish-white-100)',
        ],
        outline: [
          'bg-transparent',
          'text-(--color-bluish-white-100)',
          'border-(--color-bluish-white-100)',
          'hover:bg-(--color-bluish-white-100)',
          'hover:text-(--color-deep-blue)',
          'hover:border-(--color-bluish-white-100)',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  disabled = false,
  className,
  htmlType = 'button',
}) => {
  return (
    <button
      type={htmlType}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={clsx(
        buttonVariants({ variant }),
        disabled && ['opacity-50', 'cursor-not-allowed', 'pointer-events-none'],
        className
      )}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
