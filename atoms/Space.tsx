import { css } from '../styled-system/css';
import { clsx } from 'clsx';

const SpaceSize = {
  'sp-xs': css({ h: '10px', w: '15px' }),
  'sp-sm': css({ h: '20px', w: '15px' }),
  'sp-md': css({ h: '32px', w: '15px' }),
  'sp-lg': css({ h: '64px', w: '15px' }),
  'sp-xl': css({ h: { smToLg: '70px', lg: '140px' }, w: '15px' }),
};

export type SpaceProps = {
  sz?: keyof typeof SpaceSize;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export const Space: React.FC<SpaceProps> = ({
  sz = 'sp-md',
  className,
  children,
  ...rest
}) => {
  return (
    <div className={clsx(className, SpaceSize[sz])} {...rest}>
      {children}
    </div>
  );
};

// eventually replace with component below once this is resolved
//  https://github.com/chakra-ui/panda/issues/1041
//
/* export type SpaceProps = PandaComponentProps<'div', 'h' | 'w' | 'css'>;
export const Space: React.FC<SpaceProps> = ({
  children,
  h = 'sp-md',
  w = 'sp-xs',
  ...rest
}) => (
  <styled.div h={h} w={w} {...rest}>
    {children}
  </styled.div>
); */
