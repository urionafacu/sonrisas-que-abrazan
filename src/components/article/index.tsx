/* eslint-disable @next/next/no-img-element */
import s from './styles.module.css'

type Props = {
  title: string
}

export const HeaderArticle = ({ title }: Props) => {
  return (
    <header className={s.container}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>{title}</h2>
      </div>
    </header>
  )
}

const Article = () => {
  return (
    <div className={s.container}>
      <HeaderArticle title='SOBRE NOSOTROS' />
      <article className={s.article}>
        <p className={s.article__p}>
          En <span className={s.article__bigParagraph}>Sonrisas que abrazan</span>, nos dedicamos a
          brindar esperanza y apoyo tangible a niños con cáncer y a personas en situaciones de
          vulnerabilidad. Aspiramos a ser una luz de esperanza en las vidas de las familias
          afectadas, creando una comunidad solidaria y comprometida que respalde a los más
          necesitados. Nos esforzamos por construir un futuro donde ningún niño con cáncer ni
          persona vulnerable se sienta solo o sin apoyo.
        </p>
      </article>
      <div className={s.article__container_image}>
        <img
          src='/images/articles/article-image-1.jpeg'
          alt='SOBRE NOSOTROS'
          className={s.article__image}
        />
      </div>
    </div>
  )
}

export default Article
