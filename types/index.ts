import { HTMLStyledProps } from '../styled-system/jsx';

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
  U extends keyof HTMLStyledProps<T>
> = Merge<
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
  Partial<Pick<HTMLStyledProps<T>, U>>
>;
