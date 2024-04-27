/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import s from './card.module.css'
import Link from 'next/link'

type Props = {
  title: string
  link: string
  image: string
}

const Card = ({ title, link, image }: Props) => {
  return (
    <article>
      <img src={image} alt={title} className={s.image} />
      <p className={s.title}>{title}</p>
      <Link href={link}>Leer más</Link>
    </article>
  )
}

export default Card
