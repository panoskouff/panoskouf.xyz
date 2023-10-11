import { PandaComponentProps } from '#/types';
import { styled } from '#/styled-system/jsx';

export type SpaceProps = PandaComponentProps<'div', 'h' | 'w' | 'css'>;

export const Space: React.FC<SpaceProps> = ({ children, ...rest }) => (
  <styled.div h='sp-md' w='sp-xs' {...rest}>
    {children}
  </styled.div>
);
