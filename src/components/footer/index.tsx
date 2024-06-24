/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './styles.module.css'

const ITEMS_LEFT = [
  {
    text: 'Cáncer infantil',
    href: '/cancer',
  },
  {
    text: 'Nuestros encuentros',
    href: '/encuentros',
  },
  {
    text: 'Colaborá',
    href: '/colabora',
  },
]

const ITEMS_RIGHT = [
  {
    text: 'Contactános',
    href: '/contacto',
  },
  {
    text: '000 0000 0000',
    href: '/whatsapp',
  },
  {
    text: 'sonrisas_que_abrazan',
    href: '/instagram',
  },
]

const Footer = () => {
  return (
    <footer>
      <section className={styles.container}>
        <section className={styles.items_left_container}>
          {ITEMS_LEFT.map(({ text, href }) => (
            <Link key={`${text}-footer-left`} href={href} className={styles.anchor}>
              {text}
            </Link>
          ))}
        </section>
        <section className={styles.items_right_container}>
          {ITEMS_RIGHT.map(({ text, href }) => (
            <Link key={`${text}-footer-right`} href={href} className={styles.anchor}>
              {text}
            </Link>
          ))}
        </section>
      </section>
      <div className={styles.footer}>
        <p>Fundación sonrisas que abrazan © {new Date().getFullYear()}</p>
        <img src='/images/logo-black.png' className={styles.logo} />
      </div>
    </footer>
  )
}

export default Footer
