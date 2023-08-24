import { PandaComponentProps } from '#/types';
import { styled } from '../styled-system/jsx';

type TextAlign = PandaComponentProps<'div', 'textAlign' | 'css'>;

export const TextAlign: React.FC<TextAlign> = ({ children, ...rest }) => (
  <styled.div {...rest}>{children}</styled.div>
);
