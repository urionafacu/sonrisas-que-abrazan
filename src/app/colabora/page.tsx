/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import s from './styles.module.css'

export default function Colabora() {
  return (
    <main className={s.container}>
      <section className={s.containerTitle}>
        <h1 className={s.title}>SUMATE VOS TAMBIÉN</h1>
      </section>
      <section className={s.imageContainer}>
        <img src='/images/colabora-section/image.jpeg' className={s.image} />
      </section>
      <ul className={s.list}>
        <li>
          <HeartIcon />
          <p>Alimentos no perecederos.</p>
        </li>
        <li>
          <HeartIcon />
          <p>Ropa, calzados en buen estado para niños.</p>
        </li>
        <li>
          <HeartIcon />
          <p>
            Podes enviarnos un voucher de colaboración para buscar mercadería en algún local que
            prefieras.
          </p>
        </li>
        <li>
          <LocationIcon />
          <p>Podes alcanzarnos las donaciones a nuestra sede “”</p>
        </li>
      </ul>
      <section className={s.contactSectionContainer}>
        <div className={s.logoContainer}>
          <img src='/images/logo-black.avif' className={s.logo} />
        </div>
        <p>
          Para unirte al grupo <span>Sonrisas que abrazan</span> y ser parte de los encuentros
        </p>
        <p>Escribinos!</p>
      </section>
    </main>
  )
}

function HeartIcon() {
  return (
    <div className={s.iconContainer}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={s.icon}>
        <path
          fill='currentColor'
          d='m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z'
        />
      </svg>
    </div>
  )
}

function LocationIcon() {
  return (
    <div className={s.iconLocationContainer}>
      <svg xmlns='http://www.w3.org/2000/svg' className={s.iconLocation} viewBox='0 0 32 32'>
        <path
          fill='currentColor'
          d='M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4'
        />
        <circle cx='16' cy='13' r='4' fill='none' />
      </svg>
    </div>
  )
}
