import { styled } from '#/styled-system/jsx';
import type { PandaComponentProps } from '#/types';

/* example usage https://codepen.io/Panagiotis-Koufopoulos/pen/ZEVNqZm */

export type ColumnFullHeightWrapperProps = PandaComponentProps<'div', 'css'>;

export const ColumnFullHeightWrapper: React.FC<
  ColumnFullHeightWrapperProps
> = ({ children, ...rest }) => (
  <styled.div display='flex' flexDirection='column' h='100%' {...rest}>
    {children}
  </styled.div>
);

export type RemainingHeightContainerProps = PandaComponentProps<'div', 'css'>;

export const RemainingHeightContainer: React.FC<
  RemainingHeightContainerProps
> = ({ children, ...rest }) => (
  <styled.div flex={1} overflow='auto' {...rest}>
    {children}
  </styled.div>
);
