import Container from '../../components/layouts/Container'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import Link from 'next/link';


export default function InfoCuba() {

    const lang = useSelector( state => state.lang );
    const { content: { infoCubaPage } } = lang 

    return (
        <Container>

            <Head>
                <title>{ infoCubaPage.header }</title>
            </Head>

            <main className="infoCuba-page">
                <section className=" container infoCuba--Items">
                    <div className="infoCuba--header mb-3">
                        <h1 className="infoCuba--Title text-primary">{ infoCubaPage.h1 }</h1>

                        {
                            infoCubaPage.headerContent.map( (paragraph,index)=>(
                                <p className="infoCuba--headerContent" key={index}>
                                    {paragraph}
                                </p>
                            ))
                        }
                    </div>

                    {
                        infoCubaPage.infoItems.map( (infoItem,index)=>(
                            <div className="infoCuba--Item " key={index}>
                                <div className="infoCuba--ItemTitle text-primary d-flex justify-content-start ">
                                    <h2 className="infoCuba--Tema text-primary ">{infoItem.label}</h2>
                                </div>
                                <div className="infoCuba--ItemContent">
                                    {
                                        infoItem.info.map( (paragraph, index)=>(
                                            <p key={index}>
                                                {paragraph}
                                                {
                                                    infoItem.link.length>0 && 
                                                        infoItem.link[0] === 'ext'
                                                        ? <a href={infoItem.link[1]} target="_blank" rel="noopener noreferrer">{infoItem.link[2]}</a>
                                                        : <Link href={`${infoItem.link[1]}`}>
                                                            <a  target="_blank" rel="noopener noreferrer">{infoItem.link[2]}</a>
                                                        </Link>
                                                            
                                                        
                                                }
                                            </p>
                                        )) 
                                    }
                                </div>
                            </div>
                        ))
                    }


                    
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">{ infoCubaPage.phonesHeader }</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            {
                                infoCubaPage.phones.map( (item,index) =>(
                                    <ul className="text-left" key={index}>
                                        <li>
                                            {item.label}
                                            <ul>
                                                {
                                                    item.subItem.map((subItem,index) =>(
                                                        <li key={index}>{subItem}</li>
                                                    ))
                                                }
                                            </ul>
                                        
                                        </li>
                                    </ul>
                                ))
                            }


                           
                        </div>
                    </div>
                    
                </section>
            </main>

            <style jsx>{`
                .infoCuba-page h1,
                .infoCuba-page h2,
                .infoCuba-page h3,
                .infoCuba-page h4,
                .infoCuba-page p {
                  margin: 0;
                  padding: 0;
                }

                .infoCuba-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }

                .infoCuba-page h2 {
                  font-size: 20px;
                }

                .infoCuba-page .container {
                  width: 1024px;
                  margin: auto;
                }

                .infoCuba-page section.infoCuba--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }

                .infoCuba-page section.infoCuba--Items p {
                  font-size: 16px;
                  font-weight: 400;
                }

                .infoCuba-page .infoCuba--header {
                  width: 90%;
                }

                .infoCuba-page .infoCuba--header p {
                  text-align: left;
                }

                .infoCuba-page .infoCuba--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                  width: 90%;
                  margin: auto;
                }

                .infoCuba-page .infoCuba--Item {
                  margin-bottom: 20px;
                }

                .infoCuba-page .infoCuba--itemTitle {
                  overflow: hidden;
                }

                .infoCuba-page .infoCuba--itemTitle a {
                  font-size: 24px;
                }

                .infoCuba-page .infoCuba--ItemContent,
                .infoCuba-page .infoCuba--headerContent,
                .infoCuba-page .subItem .infoCuba--ItemTitle {
                  width: 90%;
                  margin: auto;
                  margin-top: 20px;
                }

                .infoCuba-page .infoCuba--ItemContent p,
                .infoCuba-page .infoCuba--headerContent p,
                .infoCuba-page .subItem .infoCuba--ItemTitle p {
                  text-align: left;
                  margin-bottom: 15px;
                }

                .infoCuba-page .infoCuba--ItemContent a,
                .infoCuba-page .infoCuba--headerContent a,
                .infoCuba-page .subItem .infoCuba--ItemTitle a {
                  color: #074e7c;
                }

                .infoCuba-page .infoCuba--ItemContent li,
                .infoCuba-page .infoCuba--headerContent li,
                .infoCuba-page .subItem .infoCuba--ItemTitle li {
                  font-size: 16px;
                  font-weight: 400;
                }

                @media (max-width: 992px) {
                  .infoCuba-page .container {
                    width: 90%;
                    margin: auto;
                  }
              
                  .infoCuba-page section.infoCuba--Items {
                    margin-top: 70px;
                  }
                }

                @media (max-width: 578px) {
                  .infoCuba-page section.infoCuba--Items {
                    margin-top: 90px;
                  }
                } 
            `}</style>
        </Container>
    )
}

