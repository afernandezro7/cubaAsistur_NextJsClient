import React from 'react'

export const PromoCard = ( { target, imgSrc, imgAlt, caption, transparentSub=false} ) => {


    const renderCaption= ()=>{        
        if(transparentSub){
            return(
                <div className="bloquetransparente">                       
                    <h2><span className="efectoazul">{ caption.toUpperCase() }</span> </h2>
                </div>
            )
        }
        if(!!caption){
            return(
                <h2 className="caption">{ caption }</h2>
            )
        }
    }

    return (
        <>
            <a 
                className="cardselector"
                href={ target } 
                target="_blank" 
                rel="noopener noreferrer"            
            >
                <img 
                    src= { imgSrc }
                    alt= { imgAlt }
                />

                {
                    renderCaption()
                }
            </a>

        </>
    )
}
