import s from './hamburgerButton.module.css'
import { items } from '../header'
import Link from 'next/link'
import { useRef } from 'react'

const HamburgerButton = () => {
  const checkboxRef = useRef<HTMLInputElement>(null)
  const handleLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false
    }
  }
  return (
    <main className={s.container}>
      <label className={s.hamburgerMenu}>
        <input type='checkbox' ref={checkboxRef} />
      </label>
      <aside className={s.sidebar}>
        <nav className={s.nav}>
          {items.map((item) => (
            <Link
              key={`${item.text}-hamburger-button`}
              href={item.href}
              className={s.link}
              onClick={handleLinkClick}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </aside>
    </main>
  )
}

export default HamburgerButton
