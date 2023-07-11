import { Text } from '../Text/Text';
import Link from 'next/link';
import s from './ButtonLink.module.css';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink: React.FC<Props> = ({ className, children }) => {
  return (
    <Link className={clsx(s.buttonLinkContainer, className)} href='#123'>
      <Text className={s.buttonLink}>{children}</Text>
    </Link>
  );
};
