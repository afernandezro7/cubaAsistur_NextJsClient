import React from 'react'
import { dataCard } from './dataCard'
import { PromoCard } from './ui-promoCard/PromoCard'

const data = dataCard.find( card => card.promoGroup === 1 )

export const PromoGroup1 = () => {


    return (
        <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12">

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
