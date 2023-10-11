import type { PandaComponentProps } from '#/types';
import { Flex } from './Flex';

/* prettier-ignore */
export type RowProps = PandaComponentProps<
  'div',
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'css'
>;

export const Row: React.FC<RowProps> = ({ children, ...rest }) => (
  <Flex alignItems='center' {...rest}>
    {children}
  </Flex>
);
