import type { PandaComponentProps } from '#/types';
import { Flex } from './Flex';

/* prettier-ignore */
export type CenterProps = PandaComponentProps<
  'div',
  | 'alignItems'
  | 'justifyContent'
  | 'gap'
  | 'h'
  | 'css'
>;

// @todo - add components CenterX and CenterY ?
export const Center: React.FC<CenterProps> = ({ children, ...rest }) => (
  <Flex alignItems='center' justifyContent='center' {...rest}>
    {children}
  </Flex>
);
