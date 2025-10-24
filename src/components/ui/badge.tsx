import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30",
        secondary:
          "bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30",
        success:
          "bg-[var(--color-success)]/20 text-[var(--color-success)] border border-[var(--color-success)]/30",
        warning:
          "bg-[var(--color-warning)]/20 text-[var(--color-warning)] border border-[var(--color-warning)]/30",
        danger:
          "bg-[var(--color-danger)]/20 text-[var(--color-danger)] border border-[var(--color-danger)]/30",
        outline:
          "border border-white/20 text-[var(--color-text)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
