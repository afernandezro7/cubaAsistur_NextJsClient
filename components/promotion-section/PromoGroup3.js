import { dataCard } from './dataCard'
import { PromoCard } from './ui-promoCard/PromoCard'

const data = dataCard.find( card => card.promoGroup === 3 )

export const PromoGroup3 = () => {
    return(
        < div className = "row justify-content-center text-right position-relative px-0" >
           
            <div className="col-lg-12 col-sm-12 position-relative">

                <PromoCard
                    target= {data.target}
                    imgSrc= {data.imgSrc}
                    imgAlt= {data.imgAlt}
                    caption= { data.caption }
                    transparentSub= { data.transparentSub }
                />             

            </div>

        </div>
    )



}

  
