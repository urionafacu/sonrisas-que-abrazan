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
    text: '+54 9 3517 01-0544',
    href: 'https://wa.me/+5493517010544',
    isExternal: true,
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        style={{ color: 'white' }}
      >
        <g fill='none'>
          <g clipPath='url(#IconifyId190507fd05530bc6e1)'>
            <path
              fill='currentColor'
              d='m13.79 2.64l-.57-.08a9.13 9.13 0 0 0-8.92 4a9.1 9.1 0 0 0-.71 9.66a1.3 1.3 0 0 1 .1 1c-.41 1.41-.79 2.83-1.19 4.32l.5-.15c1.35-.36 2.7-.72 4.05-1.05a1.45 1.45 0 0 1 .85.08a9.45 9.45 0 1 0 5.89-17.78m2.52 13.12a2.76 2.76 0 0 1-2.72.56a9.19 9.19 0 0 1-5.13-3.71a8.51 8.51 0 0 1-1.11-2.08a2.49 2.49 0 0 1 .55-2.52a1.23 1.23 0 0 1 1.32-.42c.2.05.34.34.52.56c.146.413.317.817.51 1.21a.94.94 0 0 1-.2 1.31c-.45.4-.38.73-.06 1.18a6.71 6.71 0 0 0 2.82 2.32c.32.14.56.17.77-.16c.09-.13.21-.24.31-.36c.58-.73.4-.72 1.32-.32c.293.123.577.267.85.43c.27.16.68.33.74.57a1.45 1.45 0 0 1-.49 1.43'
            />
          </g>
          <defs>
            <clipPath id='IconifyId190507fd05530bc6e1'>
              <path fill='#fff' d='M2.5 2.5h19v19h-19z' />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
  },
  {
    text: '@sonrisas_que_abrazan',
    href: 'https://www.instagram.com/sonrisas_que_abrazan?igsh=MWkxMml1a3pkdWttMA==',
    isExternal: true,
    icon: () => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 256 256'
        style={{ color: 'white' }}
      >
        <path
          fill='currentColor'
          d='M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32'
        />
      </svg>
    ),
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
          {ITEMS_RIGHT.map(({ text, href, isExternal = false, icon }) => (
            <div key={`${text}-footer-right`} className={styles.anchor_container}>
              {icon?.()}
              <Link target={isExternal ? '_blank' : '_self'} href={href} className={styles.anchor}>
                {text}
              </Link>
            </div>
          ))}
        </section>
      </section>
      <div className={styles.footer}>
        <p>Fundación sonrisas que abrazan © {new Date().getFullYear()}</p>
        <img src='/images/logo-white.avif' className={styles.logo} />
      </div>
    </footer>
  )
}

export default Footer
