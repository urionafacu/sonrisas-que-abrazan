'use client'

import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

const slides = [
  { backgroundImage: '/images/carousel/background-image-1.jpg', title: 'Sonrisas que abrazan' },
  { backgroundImage: '/images/carousel/background-image-2.jpg', title: 'Somos' },
  { backgroundImage: '/images/carousel/background-image-3.jpg', title: 'Voluntarios de corazón' },
]

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.carousel}>
      {slides.map(({ backgroundImage, title }, index) => (
        <div
          key={backgroundImage}
          className={styles.slide + ' ' + (index === currentSlide ? styles.active : '')}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.title_rectangle_container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.reactangle_container}>
              {Array.from({ length: slides.length }).map((_, index) => (
                <div
                  className={
                    index === currentSlide ? styles.rectangle_active : styles.rectangle_base
                  }
                  key={'rectangle' + index}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel
