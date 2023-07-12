import { PandaComponentProps } from '#/types';
import { styled } from '#/styled-system/jsx';

export type ContainerProps = PandaComponentProps<
  'div',
  | 'width'
  | 'minWidth'
  | 'maxWidth'
  | 'height'
  | 'minHeight'
  | 'maxHeight'
  | 'css'
>;

export const Container: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <styled.div {...rest}>{children}</styled.div>
);

export default Container;
