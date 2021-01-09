import { dataCard } from "./dataCard"
import { PromoCard } from "./ui-promoCard/PromoCard"

const data = dataCard.filter(card => card.promoGroup === 4 )

export const PromoGroup4 = () => {
    return (
        <div className = "example col-md-12 ml-auto mr-auto " > 
            <div className="row">
                {
                    data.map( el =>(
                        <div 
                            key={ el.id } 
                            className= { el.wraper }
                        >
                            <PromoCard
                                target= { el.target }
                                imgSrc= { el.imgSrc }
                                imgAlt= { el.imgAlt }
                                caption= { el.caption }
                                transparentSub= { el.transparentSub }
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
