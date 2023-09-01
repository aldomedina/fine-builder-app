export type TIcon =
  | "bin"
  | "send"
  | "close"
  | "chevron-up"
  | "chevron-down"
  | "chevron-right"
  | "chevron-left"
  | "twitter"
  | "download"
  | "light"
  | "dark"
  | "opensea"
  | "arrow-diag-tr"
  | "arrow-right"
  | "arrow-left"
  | "high-res"
  | "low-res"
  | "save"
  | "edit"
  | "check-mark"
  | "discord";

export type IconSize = "sm" | "md" | "lg" | "xl" | "xxl";

export type IconProps = {
  className?: string;
  icon: TIcon;
  size?: IconSize;
};
