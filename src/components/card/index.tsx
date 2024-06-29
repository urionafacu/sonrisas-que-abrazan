'use client'

/* eslint-disable @next/next/no-img-element */
import s from './card.module.css'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper/core'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { useEffect, useState } from 'react'

type Props = {
  title: string
  link: string
  image: string
}

const Card = ({ title, link, image }: Props) => {
  return (
    <article className={s.card}>
      <div className={s.image__container}>
        <img src={image} alt={title} className={s.image} />
      </div>
      <div className={s.overlay}>
        <p className={s.title}>{title}</p>
        <Link href={link} className={s.button}>
          <span>Leer más</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10px'
            height='10px'
            viewBox='0 0 24 24'
            className={s.icon}
          >
            <g fill='currentColor'>
              <path d='M12.293 5.293a1 1 0 0 0 0 1.414L17.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z' />
              <path d='M4.293 5.293a1 1 0 0 0 0 1.414L9.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z' />
            </g>
          </svg>
        </Link>
      </div>
    </article>
  )
}

const CARDS_DATA = [
  { title: 'ENCUENTROS', link: '/encuentros', image: '/images/cards/encuentros.avif' },
  { title: 'COLABORAR', link: '/colabora', image: '/images/cards/colaborar.avif' },
  {
    title: 'CÁNCER INFANTIL',
    link: '/cancer',
    image: '/images/cards/cancer-infantil.avif',
  },
]

const CardCarousel = () => {
  SwiperCore.use([Autoplay, Pagination, EffectCoverflow])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQueryMobile = window.matchMedia('(max-width: 640px)')

    const handleMediaChange = () => {
      setIsMobile(mediaQueryMobile.matches)
    }

    // Initial check
    handleMediaChange()

    mediaQueryMobile.addEventListener('change', handleMediaChange)

    return () => {
      mediaQueryMobile.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return (
    <div className={s.carouselContainer}>
      <Swiper
        effect={isMobile ? 'coverflow' : 'slide'}
        grabCursor={true}
        centeredSlides={isMobile}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        {CARDS_DATA.map((card) => (
          <SwiperSlide key={card.title}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardCarousel
