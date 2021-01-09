import { sponsorsData } from "./sponsorsData"


export const Sponsors = () => {
    return (
        <section>
            <div className="containerfull m-auto">

                <div className="row py-5">

                    {
                        sponsorsData.map( sponsor =>(
                            <div key={ sponsor.id } className="col-sm-6 col-md-3 pb-2">
                                <a 
                                    className="cardselector"
                                    href={sponsor.href} 
                                    target="_blank"
                                    rel = "noopener noreferrer"                                
                                >
                                    <img 
                                        className="img-fluid img-brand2 pt-3" 
                                        src={ sponsor.imgSrc }
                                        alt={ sponsor.imgAlt } 
                                    />
                                    <h4 className="text-primary display6 font-weight-bolder">{ sponsor.name }</h4>
                                </a>
                            </div>
                        ))
                    }

                    
                </div>
            </div>
        </section>
    )
}

