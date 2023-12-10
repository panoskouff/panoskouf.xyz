import Link from 'next/link'
import { css } from '../styled-system/css'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
  href?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

/* @todo refactor this component */
const buttonLinkContainerStyles = css({
  display: 'inline-block',
  borderRadius: 'var(--border-radius-secondary)',
  boxShadow: 'inset 0 0 0 3px var(--text-color-primary)',
  /* we need align-self otherwise it will
    take 100% of width if in flex container  */
  alignSelf: 'flex-start',
})

const buttonLinkStyles = css({
  display: 'inline-block',
  lineHeight: '25px',
  border: '3px solid var(--text-color-primary)',
  minWidth: '200px',
  padding: '11px 32px 12px',
  borderRadius: 'var(--border-radius-secondary)',
  background: 'var(--text-color-primary)',
  textAlign: 'center',
  transform: 'translate3d(-8px, -8px, 0px) ',
  transitionDuration: '0.2s',
  transformStyle: 'preserve-3d',
  color: '#fff',
  '&:hover': {
    transform: 'translate3d(0px, 0px, 0px) ',
    transitionDuration: '0.2s',
  },
})

export const ButtonLink: React.FC<Props> = ({
  className,
  children,
  href = '#',
}) => {
  return (
    <Link className={clsx(buttonLinkContainerStyles, className)} href={href}>
      <span className={buttonLinkStyles}>{children}</span>
    </Link>
  )
}
