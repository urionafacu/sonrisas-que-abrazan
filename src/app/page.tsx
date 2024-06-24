import Carousel from '@/components/carousel'
import Article, { HeaderArticle } from '@/components/article'
import Commitments from '@/components/commitments'
import Cards from '@/components/card'
import { register } from 'swiper/element/bundle'

register()

export default function Home() {
  return (
    <main>
      <Carousel />
      <Article />
      <HeaderArticle title='NUESTRO COMPROMISO' />
      <Commitments />
      <Cards />
    </main>
  )
}
