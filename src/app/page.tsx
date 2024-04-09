import Carousel from '@/components/carousel'
import Article, { HeaderArticle } from '@/components/article'
import Commitments from '@/components/commitments'

export default function Home() {
  return (
    <main>
      <Carousel />
      <Article />
      <HeaderArticle title='NUESTRO COMPROMISO' />
      <Commitments />
    </main>
  )
}
