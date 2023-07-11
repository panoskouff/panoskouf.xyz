import clsx from 'clsx';
import s from './Tag.module.css';
import { Text } from '#/atoms';

type Props = {
  // default style for text only
  text?: string;
  // @todo support text and link
  // link?: string;
  // custom children for more complex tags
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Tag: React.FC<Props> = ({
  text,
  className,
  children,
  ...rest
}) => {
  return (
    <div className={clsx(s.container, className)} {...rest}>
      {text ? (
        <Text className={s.text} bold>
          {text}
        </Text>
      ) : (
        children
      )}
    </div>
  );
};
