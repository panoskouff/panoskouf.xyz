import { styled } from '#/styled-system/jsx';
import type { PandaComponentProps } from '#/types';

export type FlexProps = PandaComponentProps<
  'div',
  | 'display'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'css'
>;

export const Flex: React.FC<FlexProps> = ({ children, ...rest }) => (
  <styled.div display='flex' {...rest}>
    {children}
  </styled.div>
);
