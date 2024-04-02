import Carousel from '@/components/carousel'
import Article, { HeaderArticle } from '@/components/article'

const ARTICLES = [
  {
    title: 'SOBRE NOSOTROS',
    body: 'En Sonrisas que abrazan, nos dedicamos a brindar esperanza y apoyo tangible a niños con cáncer y a personas en situaciones de vulnerabilidad. Aspiramos a ser una luz de esperanza en las vidas de las familias afectadas, creando una comunidad solidaria y comprometida que respalde a los más necesitados. Nos esforzamos por construir un futuro donde ningún niño con cáncer ni persona vulnerable se sienta solo o sin apoyo.',
    image: '/images/articles/article-image-1.jpeg',
  },
  // {
  //   title: 'NUESTRO OBJETIVO',
  //   body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, platea scelerisque litora lacus vestibulum sodales faucibus urna tempus, hac erat a phasellus massa nulla bibendum. Quisque fusce per dictumst fames egestas nostra proin nisl est, risus senectus leo praesent hendrerit taciti mattis gravida, libero curabitur nullam eget.',
  //   image: '/images/articles/article-image-2.jpeg',
  // },
]

export default function Home() {
  return (
    <main>
      <Carousel />
      {ARTICLES.map((article) => (
        <Article key={article.title} {...article} />
      ))}
      <HeaderArticle title='NUESTRO COMPROMISO' />
      {/* <section className='w-full h-60 flex items-center justify-center'>
        <JoinButton />
      </section> */}
    </main>
  )
}
