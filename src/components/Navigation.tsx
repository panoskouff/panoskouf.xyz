'use client'
import { styled } from '#/styled-system/jsx'
import Link from 'next/link'
import { TextLink, Row } from '#/atoms'
import { HamburgerIcon } from './Icon'
import React from 'react'

export const Navigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false)

  return (
    <Row justifyContent='space-between'>
      <Link href='/'>
        <styled.div fontSize='22px' fontWeight='900' color='text-color-logo'>
          panos.
        </styled.div>
      </Link>
      <Row gap='45px' css={{ hideBelow: 'sm' }}>
        <TextLink href='/#Portfolio'>my work</TextLink>
        {/* <TextLink href='mailto:me@panoskouf.xyz'>get in touch</TextLink> */}
        <TextLink href='/contact'>get in touch</TextLink>
        <TextLink href='/cv.html'>📃CV</TextLink>
      </Row>
      <HamburgerIcon
        hideFrom='md'
        data-nav-is-open={isNavigationOpen}
        cursor='pointer'
        stroke={{ base: '#000', _navIsOpen: '#fff' }}
        background={{ base: 'none', _navIsOpen: '#000' }}
        onClick={() => setIsNavigationOpen((prev) => !prev)}
      />
      {isNavigationOpen && <div>menu is open</div>}
    </Row>
  )
}
