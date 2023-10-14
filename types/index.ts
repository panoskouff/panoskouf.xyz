import { HTMLStyledProps } from '../styled-system/jsx';

// @todo simplify this to pass this part of the type as a prop
// React.HTMLAttributes<HTMLDivElement>
/**
 * constrain the props of a panda component in order to
 *  build a more opinionated component.
 *
 * @example
 *  type ContainerProps = PandaComponentProps<
 *    'div', 'maxWidth' | 'maxHeight' | 'css'
 *  >
 *
 *  // the above will resolve to
 *
 *  type ContainerProps = Merge<
 *   Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
 *   Partial<Pick<HTMLStyledProps<'div'>, 'maxWidth' | 'maxHeight' | 'css'>>
 *  >;
 */
export type PandaComponentProps<
  T extends keyof HTMLElementTagNameMap,
  // @ts-ignore
  U extends keyof HTMLStyledProps<T>
> = Merge<
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  // @ts-ignore
  Partial<Pick<HTMLStyledProps<T>, U>>
>;
