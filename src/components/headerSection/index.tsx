/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'

type Props = {
  title: string
  image: string
  body: string
}

const HeaderSection = ({ title, image, body }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <article className={styles.article}>
        <img src={image} alt={title} className={styles.article__image} />
        <p className={styles.article__p}>{body}</p>
      </article>
    </div>
  )
}

export default HeaderSection
