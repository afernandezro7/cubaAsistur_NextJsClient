import { dataCard } from './dataCard'
import { PromoCard } from './ui-promoCard/PromoCard'

const data = dataCard.find( card => card.promoGroup === 3 )

export const PromoGroup3 = () => {
    return(
        < div className = "row justify-content-center text-right position-relative" > <a href="# " target="_blank" rel="noopener noreferrer" className="cardselector"></a>
           
            <div className="col-lg-12 col-sm-12 thumbnail">

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

