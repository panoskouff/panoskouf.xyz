import { css } from '../styled-system/css';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';

// @todo add this to test styles definitions ?
const textLink = css({
  fontSize: '18px',
  fontWeight: 700,
  color: 'text-color-secondary',
  boxShadow: 'inset 0 -1px 0 0 var(--colors-text-color-tertiary)',
  transition: 'all 200ms ease',
  '&:hover': {
    boxShadow: 'inset 0px -7px 0px 0px var(--colors-text-color-tertiary)',
    transform: 'scale(1.025)',
  },
});

export type TextLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const TextLink = ({
  className,
  children,
  href,
  ...rest
}: TextLinkProps) => (
  <Link className={clsx(textLink, className)} href={href} {...rest}>
    {children}
  </Link>
);
