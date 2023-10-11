import type { PandaComponentProps } from '#/types';
import { Flex } from './Flex';

/* prettier-ignore */
export type ColumnProps = PandaComponentProps<
  'div',
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'css'
>;

export const Column: React.FC<ColumnProps> = ({ children, ...rest }) => (
  <Flex flexDirection='column' {...rest}>
    {children}
  </Flex>
);
