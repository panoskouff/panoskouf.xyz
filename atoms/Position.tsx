import { PandaComponentProps } from '#/types';
import { styled } from '../styled-system/jsx';

export type PositionPandaProperties =
  | 'pos'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'insetStart'
  | 'insetEnd';

type PositionProps = PandaComponentProps<
  'div',
  PositionPandaProperties | 'css'
>;

export const Position: React.FC<PositionProps> = ({ children, ...rest }) => (
  <styled.div pos='absolute' {...rest}>
    {children}
  </styled.div>
);
