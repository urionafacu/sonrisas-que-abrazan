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
          <a key={text} href={href} className={styles.anchor}>
            {text}
          </a>
        ))}
      </section>
    </footer>
  )
}

export default Footer
