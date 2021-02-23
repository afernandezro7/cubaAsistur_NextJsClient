import Container from '../../components/layouts/Container'
import Head from 'next/head'
import { useSelector } from 'react-redux'


export default function FundamentoLegal() {

	const { legaBasisPage: language } = useSelector(state => state.lang.content)

    return (
        <Container>

            <Head>
                <title>{ language.header }</title>
            </Head>

            <main className="fundamentoLegal-page">
                <section className=" container fundamento--Items">
                    <div className="fundamento--header mb-3">
                        <h1 className="fundamento--Title text-primary">{ language.h1 }</h1>
                    </div>

                    <div className="fundamento--Item ">
                        <div className="fundamento--Hero">
                            <img src="/assets/images/gaceta.png" alt={language.imgAlt}/>
                        </div>
                    </div>


                    <div className="fundamento--Item row">

                        <div className="fundamento--columna col-md-6 col-sm-12 text-justify">
                            <h2 className="text-center">
                                <b>{language.h2}</b>
                            </h2>
                            <div className="row justify-content-center my-3">
                                <span className="separador d-block text-center"/>
                            </div>
                            <p className="ml-3">{ language.certifier }</p>
                            <h3 className="text-center mb-3">{ language.certicationLabel }</h3>
                            <p>{ language.certicationInfo }</p>

                            <h3 className="text-center mb-3">{language.agreementLabel}</h3>
							{
								language.firstAgreements.map( (item, index)=>(
									<p key={index}>{item}</p>
								) ) 
							}
                            
                        </div>

                        <div className="fundamento--columna col-md-6 col-sm-12 text-justify">
							
							{
								language.lastAgreements.map( (item, index)=>(
									<p key={index}>{item}</p>
								) ) 
							}
                            
                            <h5 className="text-right">
                                <b>{language.author}</b>
                            </h5>
                        </div>
                    </div>
                    <div>
                        <a className="text-right" download href="/assets/pdf/Acuerdo6774.pdf">
							{ language.pdf }&nbsp;
                            <i className="far fa-file-pdf"/>
						</a>
                    </div>
                </section>
            </main>

            <style jsx> {`
                .fundamentoLegal-page h1, .fundamentoLegal-page h2, .fundamentoLegal-page h3, .fundamentoLegal-page h4, .fundamentoLegal-page p {
                  margin: 0;
                  padding: 0;
                }
                .fundamentoLegal-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }
                .fundamentoLegal-page h2 {
                  font-size: 20px;
                }
                .fundamentoLegal-page .container {
                  width: 1024px;
                  margin: auto;
                }
                .fundamentoLegal-page section.fundamento--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }
                .fundamentoLegal-page section.fundamento--Items h2 {
                  font-size: 22px;
                }
                .fundamentoLegal-page section.fundamento--Items h3 {
                  font-size: 20px;
                  font-weight: 400;
                }
                .fundamentoLegal-page section.fundamento--Items p {
                  font-size: 20px;
                  font-weight: 400;
                  margin-bottom: 15px;
                }
                .fundamentoLegal-page section.fundamento--Items a {
                  font-size: 20px;
                  color: #302d2d;
                }
                .fundamentoLegal-page section.fundamento--Items a i {
                  color: #074e7c;
                }
                .fundamentoLegal-page section.fundamento--Items a:hover {
                  font-size: 22px;
                  color: #074e7c;
                  transition: 0.3s ease-out;
                  -webkit-transition: 0.3s ease-out;
                  -moz-transition: 0.3s ease-out;
                  -ms-transition: 0.3s ease-out;
                  -o-transition: 0.3s ease-out;
                }
                .fundamentoLegal-page .fundamento--header {
                  width: 80%;
                }
                .fundamentoLegal-page .fundamento--header p {
                  text-align: left;
                }
                .fundamentoLegal-page .fundamento--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                }
                .fundamentoLegal-page .fundamento--Item {
                  margin-bottom: 20px;
                  font-family: serif;
                }
                .fundamentoLegal-page .separador {
                  border: 1px solid gray;
                  height: 2px;
                  width: 10%;
                }

                @media (max-width: 992px) {
                  .fundamentoLegal-page .container {
                    width: 90%;
                    margin: auto;
                  }
                  .fundamentoLegal-page section.fundamento--Items {
                    margin-top: 70px;
                  }
                }
                @media (max-width: 578px) {
                  .fundamentoLegal-page section.fundamento--Items {
                    margin-top: 90px;
                  }
                }
            `}</style>
        </Container>
    )
}

