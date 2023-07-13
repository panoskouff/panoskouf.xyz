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
  pos = 'absolute',
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  children,
  ...rest
}) => (
  <styled.div
    pos={pos}
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    {...rest}
  >
    {children}
  </styled.div>
);

export default Positioned;
