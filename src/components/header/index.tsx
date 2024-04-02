import Link from 'next/link'
import s from './styles.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo} />
      <ul className={s.items}>
        <li>
          <Link className={s.link} href='/cancer'>
            Cáncer Infantil
          </Link>
        </li>
        <li>
          <div className={s.separator} />
        </li>
        <li>
          <Link className={s.link} href='/encuentros'>
            Encuentros
          </Link>
        </li>
        <li>
          <div className={s.separator} />
        </li>
        <li>
          <Link className={s.link} href='/colabora'>
            Colaborá
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
