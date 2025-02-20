import { Link } from "../Link";

type ButtonInternalProps = {
  children: string | React.ReactNode;
  className: string;
  link: string;
};

export const ButtonInternal = ({
  children,
  className,
  link,
}: ButtonInternalProps) => {
  return (
    <Link href={link} className={className}>
      {children}
    </Link>
  );
};
