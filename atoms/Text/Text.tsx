import React from 'react';
import s from './Text.module.css';
import clsx from 'clsx';
import { tinos } from '#/styles/fonts';

/* prettier-ignore */
type TextElements = Pick<
  React.ReactHTML,
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    | 'p' | 'span' | 'strong' | 'em' | 'small'
>;

type Props = {
  as?: keyof TextElements;
  variant?: 'inherit' | 'body' | 'title' | 'title-secondary';
  bold?: boolean;
  color?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLElement>;

const Text: React.FC<Props> = ({
  as: Element = 'span',
  variant = 'inherit',
  bold = false,
  color,
  style,
  className,
  children,
}) => {
  const baseClassName = 'text';
  const variantClassName = `${baseClassName}-${variant}`;
  const boldClassName = bold ? `${baseClassName}-bold` : '';
  const fontFamilyClassName = variant.startsWith('title')
    ? tinos.className
    : '';
  const classes = clsx(
    s[baseClassName],
    s[variantClassName],
    s[boldClassName],
    fontFamilyClassName,
    className
  );

  const styles = { ...(color ? { color } : {}), ...style };

  return (
    <Element className={classes} style={styles}>
      {children}
    </Element>
  );
};

export default Text;
