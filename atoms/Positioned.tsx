import { PandaComponentProps } from '#/types';
import { styled } from '../styled-system/jsx';

type PositionedProps = PandaComponentProps<
  'div',
  | 'pos'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'insetStart'
  | 'insetEnd'
  | 'css'
>;

export const Positioned: React.FC<PositionedProps> = ({
  children,
  ...rest
}) => (
  <styled.div pos='absolute' top={0} right={0} bottom={0} left={0} {...rest}>
    {children}
  </styled.div>
);
