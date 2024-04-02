/* eslint-disable @next/next/no-img-element */
import s from './styles.module.css'

type Props = {
  title: string
  image: string
  body: string
}

export const HeaderArticle = ({ title }: Pick<Props, 'title'>) => {
  return (
    <header className={s.container}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>{title}</h2>
      </div>
    </header>
  )
}

const Article = ({ title, image, body }: Props) => {
  return (
    <div className={s.container}>
      <HeaderArticle title={title} />
      <article className={s.article}>
        <p className={s.article__p}>{body}</p>
      </article>
      <div className={s.article__container_image}>
        <img src={image} alt={title} className={s.article__image} />
      </div>
    </div>
  )
}

export default Article
