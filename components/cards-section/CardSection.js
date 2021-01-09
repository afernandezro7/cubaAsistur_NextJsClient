import { Card } from "./Card"


const cardsData = [

    {
        id: 1,
        img: '/assets/images/palmeras.png',
        imgAlt: 'Los más sorprendentes destinos dentro de CUBA',
        h4html1: 'Los más sorprendentes',
        h4html2: 'destinos dentro',
        h4html3: 'de CUBA',
        bgCard: 'bg-warning'
    },
    {
        id: 2,
        img: '/assets/images/seguros.png',
        imgAlt: 'Asegurado 100% todo tu tiempo en CUBA',
        h4html1: 'Asegurado 100%',
        h4html2: 'todo tu tiempo',
        h4html3: 'en CUBA',
        bgCard: 'bg-primary'
    },
    {
        id: 3,
        img: '/assets/images/maleta.png',
        imgAlt: 'Los alojamientos más ecónomicos en CUBA',
        h4html1: 'Los alojamientos',
        h4html2: 'más ecónomicos',
        h4html3: 'en CUBA',
        bgCard: 'bg-sucess'
    }
]


export const CardSection = () => {
    return (
        <>

            <div className= "col-md-12 ml-auto mr-auto">
                <div className="row">
                    {
                        cardsData.map( card => ( 

                            <Card
                                key= { card.id }
                                img= { card.img }
                                imgAlt= { card.imgAlt }
                                h4html1= { card.h4html1 }
                                h4html2= { card.h4html2 }
                                h4html3= { card.h4html3 }
                                bgCard ={ card.bgCard }
                            /> 
                        
                        ))
                    }
                </div>
            </div>

        </>
        
    )

    

}


