import { styled } from '#/styled-system/jsx';
import type { PandaComponentProps } from '#/types';

export type ViewportSpotlightProps = PandaComponentProps<
  'div',
  'display' | 'h' | 'alignItems' | 'justifyContent' | 'css'
>;

/**
 * The ViewportSpotlight component is used to shown 1 item in the whole viewport.
 * Basically it is a container that takes the whole viewport and centers the
 * content.
 *
 * By default it centers content only in the Y axis
 * you can pass justify-content="center" to center in the X axis as well.
 */
export const ViewportSpotlight: React.FC<ViewportSpotlightProps> = ({
  alignItems = 'center',
  display = 'flex',
  h = '100vh',
  children,
  ...rest
}) => (
  <styled.div display={display} alignItems={alignItems} h={h} {...rest}>
    {children}
  </styled.div>
);
