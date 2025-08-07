import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const buttonVariants = cva(
  "subtitle-03 transition-colors duration-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        yellow: [
          "text-2025-neutral-600 bg-2025-yellow-300 border-2025-yellow-400",
          "hover:text-2025-yellow-100 hover:bg-2025-yellow-500 hover:border-2025-yellow-300",
          "focus:text-2025-yellow-500 focus:bg-2025-yellow-100 focus:border-2025-yellow-500 focus:ring-2025-yellow-300",
        ],
        red: [
          "text-2025-red-900 bg-2025-red-400 border-2025-red-400",
          "hover:text-2025-red-100 hover:bg-2025-red-500 hover:border-2025-red-300",
          "focus:text-2025-red-600 focus:bg-2025-red-100 focus:border-2025-red-500 focus:ring-2025-red-300",
        ],
        blue: [
          "text-2025-blue-900 bg-2025-blue-200 border-2025-blue-400",
          "hover:text-2025-blue-100 hover:bg-2025-blue-500 hover:border-2025-blue-300",
          "focus:text-2025-blue-600 focus:bg-2025-blue-100 focus:border-2025-blue-500 focus:ring-2025-blue-300",
        ],
        disable: [
          "bg-2025-neutral-200 border-2025-neutral-300 text-2025-neutral-300",
          "cursor-not-allowed focus:ring-2025-neutral-300",
        ],
        ghost: [
          "bg-transparent border-transparent text-2025-neutral-600 body-01",
          "hover:text-2025-red-500 hover:bg-0",
          "focus:text-2025-red-600",
        ],
      },
      size: {
        default:
          "min-w-[50px] px-5 py-2 rounded-[64px] border-2 focus:ring-2 focus:ring-offset-2",
        ghost: "shadow-none",
      },
    },
    defaultVariants: {
      variant: "yellow",
      size: "default",
    },
    compoundVariants: [
      {
        variant: "ghost",
        size: "ghost",
      },
    ],
  },
);

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  variant,
  size,
  children,
  className,
  disabled,
  ...props
}) => {
  const buttonSize = variant === "ghost" ? "ghost" : size || "default";

  return (
    <Button
      className={cn(buttonVariants({ variant, size: buttonSize, className }))}
      disabled={disabled || variant === "disable"}
      {...props}
    >
      {children}
    </Button>
  );
};
