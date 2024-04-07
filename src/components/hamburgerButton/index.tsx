import s from './hamburgerButton.module.css'
import { items } from '../header'
import Link from 'next/link'

const HamburgerButton = () => {
  return (
    <main className={s.container}>
      <label className={s.hamburgerMenu}>
        <input type='checkbox' />
      </label>
      <aside className={s.sidebar}>
        <nav className={s.nav}>
          {items.map((item) => (
            <Link key={`${item.text}-hamburger-button`} href={item.href} className={s.link}>
              {item.text}
            </Link>
          ))}
        </nav>
      </aside>
    </main>
  )
}

export default HamburgerButton
