import Carousel from '@/components/carousel'
import Article, { HeaderArticle } from '@/components/article'
import Commitments from '@/components/commitments'
import Card from '@/components/card'

export default function Home() {
  return (
    <main>
      <Carousel />
      <Article />
      <HeaderArticle title='NUESTRO COMPROMISO' />
      <Commitments />
      <Card title='ENCUENTROS' image='/images/cards/encuentros.jpeg' link='/encuentros' />
    </main>
  )
}
