'use client'
/* @todo cleanup */
import { styled } from '#/styled-system/jsx'
import Link from 'next/link'
import {
  TextLink,
  Row,
  Position,
  Column,
  Padding,
  Background,
  TextAlign,
  Transform,
  Mask,
} from '#/atoms'
import { HamburgerIcon } from './Icon'
import React from 'react'

export const Navigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false)

  return (
    <Position pos='relative'>
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
          <TextLink href='/cv'>📃CV</TextLink>
        </Row>
        <HamburgerIcon
          hideFrom='md'
          data-nav-is-open={isNavigationOpen}
          cursor='pointer'
          stroke={{ base: '#000', _navIsOpen: '#fff' }}
          background={{ base: 'none', _navIsOpen: '#d2c5ad' }}
          width='36px'
          height='36px'
          padding='8px'
          onClick={() => setIsNavigationOpen((prev) => !prev)}
        />
      </Row>
      <Position top='36px' right='-14px'>
        {/* top = same space as hamburger icon */}
        <Mask>
          <Transform
            css={{ pos: 'relative' }}
            data-nav-is-open={isNavigationOpen}
            transform={{
              base: 'translateY(-100%)',
              _navIsOpen: 'translateY(0)',
            }}
            transition='transform 400ms ease'
          >
            <Background
              bg='#e2d4b9f2'
              css={{ border: '3px solid #d2c5ad', borderRadius: '3px' }}
            >
              <Padding p='20px'>
                <TextAlign textAlign='right'>
                  <Column gap='20px'>
                    <TextLink variant href='/#Portfolio'>
                      my work
                    </TextLink>
                    {/* <TextLink variant href='mailto:me@panoskouf.xyz'>get in touch</TextLink> */}
                    <TextLink variant href='/contact'>
                      get in touch
                    </TextLink>
                    <TextLink variant href='/cv'>
                      📃CV
                    </TextLink>
                  </Column>
                </TextAlign>
              </Padding>
            </Background>
          </Transform>
        </Mask>
      </Position>
    </Position>
  )
}
