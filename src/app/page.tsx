import Carousel from '@/components/carousel'
import HeaderSection from '@/components/headerSection'
import JoinButton from '@/components/joinButton'

const ARTICLES = [
  {
    title: 'SOBRE NOSOTROS',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, platea scelerisque litora lacus vestibulum sodales faucibus urna tempus, hac erat a phasellus massa nulla bibendum. Quisque fusce per dictumst fames egestas nostra proin nisl est, risus senectus leo praesent hendrerit taciti mattis gravida, libero curabitur nullam eget.',
    image: '/images/articles/article-image-1.jpeg',
  },
  {
    title: 'NUESTRO OBJETIVO',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos, platea scelerisque litora lacus vestibulum sodales faucibus urna tempus, hac erat a phasellus massa nulla bibendum. Quisque fusce per dictumst fames egestas nostra proin nisl est, risus senectus leo praesent hendrerit taciti mattis gravida, libero curabitur nullam eget.',
    image: '/images/articles/article-image-2.jpeg',
  },
]

export default function Home() {
  return (
    <main>
      <Carousel />
      {ARTICLES.map((article) => (
        <HeaderSection key={article.title} {...article} />
      ))}
      <section className='w-full h-60 flex items-center justify-center'>
        <JoinButton />
      </section>
    </main>
  )
}
