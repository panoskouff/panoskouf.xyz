import { PandaComponentProps } from '#/types';
import { styled } from '../styled-system/jsx';

type BackgroundProps = PandaComponentProps<
  'div',
  | 'bg'
  | 'backgroundColor'
  | 'backgroundImage'
  | 'backgroundSize'
  | 'backgroundRepeat'
  | 'backgroundPositionX'
  | 'backgroundPositionY'
  | 'backgroundPosition'
  | 'backgroundClip'
  | 'backgroundAttachment'
  | 'backgroundOrigin'
  | 'rounded'
  | 'css'
>;

export const Background: React.FC<BackgroundProps> = ({
  children,
  ...rest
}) => <styled.div {...rest}>{children}</styled.div>;

export default Background;
