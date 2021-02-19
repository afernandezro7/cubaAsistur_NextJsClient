import PropTypes from 'prop-types'

export const Card = ( { img,imgAlt, h4html1, h4html2, h4html3, bgCard='bg-warning' } ) => {


    return (
        <>
            < div className = "col-lg-4 col-md-6 col-sm-12 mb-0" > 
                <div 
                    className={ `card ${ bgCard }` }
                >
                    <a href="# " target="_blank" className="cardselector">
                        <img 
                            src= { img } 
                            alt= { imgAlt }
                            className="card-img-small"
                            style={{width:160, height: 160}}
                        />
                    </a>
                    <div className="card-body">
                        <a href="# " target="_blank" className="cardselector">
                            <h4 className="card-title h2-font-sm-size h2-font-xm-size mt-0">{ h4html1 } <br/> {h4html2} <br/> {h4html3 }</h4>
                        </a>
                        <a href="#" className="Estilo2">ver más</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                div {
                    font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
                }
                h4,.h4 {
	                font-size: 2.5em;
	                line-height: 1.45em;
	                margin-top: 30px;
	                margin-bottom: 15px;
	                color: #FFFFFF;
	                font-weight: 100;
                }
                a {
                    color: #ffffff;
                }
                a:hover{
                    color: #116268;
                }

            `}</style>
        </>
    )

}


Card.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}

