import { IconElementProps } from "./Icon";
import { IconSvgBase } from "./IconSvgBase";

export const IconArrowLeft = ({ className = "" }: IconElementProps) => {
  return (
    <IconSvgBase className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </IconSvgBase>
  );
};
