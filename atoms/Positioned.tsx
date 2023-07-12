import { styled } from '../styled-system/jsx';

type PositionedProps = PandaComponentProps<
  'div',
  // @todo check shorthand syntax for properties and maybe use these
  'top' | 'right' | 'bottom' | 'left' | 'inset' | 'position' | 'css'
>;

export const Positioned: React.FC<PositionedProps> = ({
  children,
  inset = 0,
  position = 'absolute',
  ...rest
}) => (
  <styled.div position={position} inset={inset} {...rest}>
    {children}
  </styled.div>
);

export default Positioned;
