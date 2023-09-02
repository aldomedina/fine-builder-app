import cn from "classnames";

import s from "./button.module.scss";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "text" | "contained" | "outlined";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "text",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        s.btn,
        s[size],
        s[variant],
        {
          [s.fullWidth]: fullWidth,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
