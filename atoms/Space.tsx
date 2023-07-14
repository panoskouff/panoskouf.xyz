import { styled } from '#/styled-system/jsx';
import type { PandaComponentProps } from '#/types';

export type SpaceProps = PandaComponentProps<'div', 'h' | 'w' | 'css'>;

export const Space: React.FC<SpaceProps> = ({
  children,
  h = 'sp-md',
  w = 'sp-xs',
  ...rest
}) => (
  <styled.div h={h} w={w} {...rest}>
    {children}
  </styled.div>
);
