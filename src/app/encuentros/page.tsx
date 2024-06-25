/* eslint-disable @next/next/no-img-element */
import s from './styles.module.css'

export default function Encuentros() {
  return (
    <main className={s.container}>
      <section className={s.containerTitle}>
        <h1 className={s.title}>NUESTROS ENCUENTROS</h1>
      </section>
      <section>
        <LocationTitle title='Hospital de niños CÓRDOBA' className={s.firstLocationTitle} />
        <div className={s.firstLocationFirstImageContainer}>
          <img
            src='/images/encuentros/hospital-ninos-1.jpeg'
            alt='foto hospital de niños'
            className={s.firstLocationFirstImage}
          />
        </div>
        <div className={s.firstLocationRestImagesContainer}>
          <img
            src='/images/encuentros/hospital-ninos-2.jpeg'
            alt='foto hospital de niños'
            className={s.firstLocationRestImage}
          />
          <img
            src='/images/encuentros/hospital-ninos-3.jpeg'
            alt='foto hospital de niños'
            className={s.firstLocationRestImage}
          />
        </div>
      </section>
      <section>
        <LocationTitle title='Colecta voluntarios - La Calera' className={s.firstLocationTitle} />
        <div className={s.firstLocationFirstImageContainer}>
          <img
            src='/images/encuentros/colecta-1.jpeg'
            alt='foto hospital de niños'
            className={s.firstLocationFirstImage}
          />
        </div>
        <div className={s.firstLocationRestImagesContainer}>
          <img
            src='/images/encuentros/colecta-2.jpeg'
            alt='foto hospital de niños'
            className={s.secondLocationRestImage}
          />
          <img
            src='/images/encuentros/colecta-3.jpeg'
            alt='foto hospital de niños'
            className={s.secondLocationRestImage}
          />
          <img
            src='/images/encuentros/colecta-4.jpeg'
            alt='foto hospital de niños'
            className={s.secondLocationRestImage}
          />
        </div>
      </section>
    </main>
  )
}

function LocationTitle({ title, className = '' }: { title: string; className?: string }) {
  return (
    <div className={`${s.locationTitleContainer} ${className}`}>
      <LocationIcon />
      <h2 className={s.locationTitle}>{title}</h2>
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
