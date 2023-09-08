import Link from 'next/link';
import s from './ButtonLink.module.css';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  href?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink: React.FC<Props> = ({
  className,
  children,
  href = '#',
}) => {
  return (
    <Link className={clsx(s.buttonLinkContainer, className)} href={href}>
      <span className={s.buttonLink}>{children}</span>
    </Link>
  );
};
