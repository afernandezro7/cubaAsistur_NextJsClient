import Container from '../components/layouts/Container'
import styles from '../styles/Home.module.css'

import { CardSection } from '../components/cards-section/CardSection'
import { Sponsors } from '../components/sponsors-section/Sponsors'
import { FormContact } from '../components/contact-form/FormContact'
import { PromotionsCards } from '../components/promotion-section/PromotionsCards'
import { SlideHeader } from '../components/slideHeader/SlideHeader'

export default function Home() {
  return (
    <Container className="index-page">     

      <main>       

        <SlideHeader/>

        <CardSection/>

        <PromotionsCards/>

        <FormContact/>

        <Sponsors/>
        
      </main>

      
    </Container>
  )
}
