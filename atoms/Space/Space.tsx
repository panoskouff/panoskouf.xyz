import s from './Space.module.css';

type SpaceProps = {
  sp?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & React.HTMLAttributes<HTMLDivElement>;

export const Space: React.FC<SpaceProps> = ({
  children,
  sp = 'md',
  ...rest
}) => (
  <div className={s[`space-${sp}`]} {...rest}>
    {children}
  </div>
);
