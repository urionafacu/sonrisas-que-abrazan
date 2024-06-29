/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import s from './styles.module.css'
import HamburgerButton from '../hamburgerButton'
import { Fragment } from 'react'
import Button from '../button'

export const items = [
  {
    text: 'Cáncer infantil',
    href: '/cancer',
  },
  {
    text: 'Encuentros',
    href: '/encuentros',
  },
  {
    text: 'Colaborá',
    href: '/colabora',
  },
]

const Header = () => {
  return (
    <header className={s.header}>
      <Link href='/' className={s.logoContainer}>
        <img src='/images/logo.avif' alt='logo' className={s.logo} />
      </Link>
      <ul className={s.items}>
        {items.map((item, i) => (
          <Fragment key={`${item.href}-header`}>
            <li>
              <Link href={item.href} className={s.link}>
                {item.text}
              </Link>
            </li>
            {i !== items.length - 1 && <div className={s.separator} />}
          </Fragment>
        ))}
        <li>
          <Button
            title='QUIERO DONAR'
            type='primary'
            onClick={() =>
              window.open(
                `https://wa.me/+5493517010544?text=${encodeURIComponent('Hola! Quiero donar')}`,
                '_blank',
              )
            }
          />
        </li>
      </ul>
      <HamburgerButton />
    </header>
  )
}

export default Header
