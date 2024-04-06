import Link from 'next/link'
import styles from './styles.module.css'

const items = [
  {
    text: 'Cáncer infantil',
    href: '/',
  },
  {
    text: 'Nuestros encuentros',
    href: '/',
  },
  {
    text: 'Colaborá',
    href: '/',
  },
  {
    text: 'Contactános',
    href: '/',
  },
]

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.anchor__container}>
        {items.map(({ text, href }) => (
          <Link key={text} href={href} className={styles.anchor}>
            {text}
          </Link>
        ))}
      </section>
    </footer>
  )
}

export default Footer
