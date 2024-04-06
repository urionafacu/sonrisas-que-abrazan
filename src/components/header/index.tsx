import Link from 'next/link'
import s from './styles.module.css'
import HamburgerButton from '../hamburgerButton'

export const items = [
  {
    text: 'Cáncer infantil',
    href: '/',
  },
  {
    text: 'Encuentros',
    href: '/',
  },
  {
    text: 'Colaborá',
    href: '/',
  },
]

const Header = () => {
  return (
    <header className={s.header}>
      <Link href='/' className={s.logoContainer}>
        <div className={s.logo} />
      </Link>
      <ul className={s.items}>
        {items.map((item, i) => (
          <>
            <li key={item.href}>
              <Link href={item.href} className={s.link}>
                {item.text}
              </Link>
            </li>
            {i !== items.length - 1 && <div className={s.separator} />}
          </>
        ))}
      </ul>
      <div className={s.hamburgerMenu}>
        <HamburgerButton />
      </div>
    </header>
  )
}

export default Header
