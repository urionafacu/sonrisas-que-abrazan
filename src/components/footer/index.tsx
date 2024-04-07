import Link from 'next/link'
import styles from './styles.module.css'

const items = [
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
  {
    text: 'Contactános',
    href: '/contacto',
  },
]

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.anchor__container}>
        {items.map(({ text, href }) => (
          <Link key={`${text}-footer`} href={href} className={styles.anchor}>
            {text}
          </Link>
        ))}
      </section>
    </footer>
  )
}

export default Footer
