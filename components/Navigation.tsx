import { Flex } from '#/atoms/Flex';
import { styled } from '#/styled-system/jsx';
import Link from 'next/link';
import { css } from '../styled-system/css';

// @todo add this to test styles definitions ?
const navLink = css({
  fontSize: '18px',
  fontWeight: 700,
  color: 'text-color-secondary',
  boxShadow: 'inset 0 -1px 0 0 var(--colors-text-color-tertiary)',
  transition: 'all 200ms ease',
  '&:hover': {
    boxShadow: 'inset 0px -7px 0px 0px var(--colors-text-color-tertiary)',
    transform: 'scale(1.025)',
  },
});

export const Navigation = () => (
  <Flex justifyContent='space-between'>
    <Link href='/'>
      <styled.div fontSize='22px' fontWeight='900' color='text-color-logo'>
        panos.
      </styled.div>
    </Link>
    <Flex gap='45px'>
      <Link className={navLink} href='/#Portfolio'>
        my work
      </Link>
      <Link className={navLink} href='mailto:me@panoskouf.xyz'>
        get in touch
      </Link>
      <Link className={navLink} href='/cv.html'>
        📃CV
      </Link>
    </Flex>
  </Flex>
);
