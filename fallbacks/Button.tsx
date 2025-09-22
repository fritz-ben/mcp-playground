import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
  // Base classes
  [
    'relative',
    'flex',
    'items-center',
    'justify-center',
    'px-8', // 32px
    'py-4', // 16px
    'rounded-lg', // 8px
    'button-text', // Uses design token text style
    'text-nowrap',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'border-2',
    'border-solid',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-opacity-50',
  ],
  {
    variants: {
      type: {
        primary: '',
      },
      state: {
        default: [
          'bg-(--color-bluish-white-100)',
          'text-(--color-deep-blue)',
          'border-(--color-bluish-white-100)',
          'hover:bg-transparent',
          'hover:text-(--color-bluish-white-100)',
          'hover:border-(--color-bluish-white-100)',
          'focus:ring-(--color-deep-blue)',
        ],
        hover: [
          'bg-transparent',
          'text-(--color-bluish-white-100)',
          'border-(--color-bluish-white-100)',
          'hover:bg-(--color-bluish-white-100)',
          'hover:text-(--color-deep-blue)',
          'focus:ring-(--color-bluish-white-100)',
        ],
      },
      disabled: {
        true: [
          'bg-gray-200',
          'text-gray-400',
          'border-gray-200',
          'cursor-not-allowed',
        ],
        false: '',
      },
    },
    compoundVariants: [
      {
        disabled: true,
        class: [
          'bg-gray-200',
          'text-gray-400',
          'border-gray-200',
          'cursor-not-allowed',
        ],
      },
    ],
    defaultVariants: {
      type: 'primary',
      state: 'default',
      disabled: false,
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  /** The text content of the button */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** HTML button type */
  htmlType?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type,
  state,
  disabled,
  onClick,
  className,
  htmlType = 'button',
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <button
      type={htmlType}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled || false}
      className={clsx(buttonVariants({ type, state, disabled: disabled || false }), className)}
      aria-disabled={disabled || false}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
