import Text from '../Text/Text';
import Link from 'next/link';
import s from './ButtonLink.module.css';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink: React.FC<Props> = ({ children }) => {
  return (
    <Link className={s.buttonLinkContainer} href='#123'>
      <Text className={s.buttonLink}>{children}</Text>
    </Link>
  );
};

export default ButtonLink;
