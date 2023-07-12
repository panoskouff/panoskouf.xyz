import { styled } from '#/styled-system/jsx';
import type { PandaComponentProps } from '#/types';

type FlexProps = PandaComponentProps<
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

export const Flex: React.FC<FlexProps> = ({
  display = 'flex',
  children,
  ...rest
}) => (
  <styled.div display={display} {...rest}>
    {children}
  </styled.div>
);
