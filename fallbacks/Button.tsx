import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva([
  "inline-flex items-center justify-center",
  "px-8 py-4 rounded-lg",
  "font-(--button-base) text-nowrap",
  "transition-colors duration-200",
  "focus:outline-none focus:ring-2 focus:ring-offset-2",
  "disabled:opacity-50 disabled:cursor-not-allowed",
  "active:scale-95",
  "bg-(--color-bluish-white) text-(--color-deep-blue)",
  "hover:bg-transparent hover:text-(--color-bluish-white)",
  "border-2 border-(--color-bluish-white)",
  "focus:ring-(--color-bluish-white)",
]);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;