import Container from '../../components/layouts/Container'
import Head from 'next/head'
import { useSelector } from 'react-redux'


export default function QuienesSomos() {

    const {content:{ aboutPage }} = useSelector( state => state.lang );

    return (
        <Container >
            <Head>
                <title>{ aboutPage.header }</title>
            </Head>

            <main className="quienesSomos-page">
                < section className = "container cober--Items" > 
                    <div className="cober--header mb-3">
                        <h1 className="cober--Title text-primary">{ aboutPage.h1 }</h1>
                    </div>

                    {
                        aboutPage.content.map( (item, index )=>(
                            <div key={index} className="cober--Item">
                                <div className="cober--ItemTitle text-primary d-flex justify-content-start ">
                                    <h2 className="cober--Tema text-primary">{ item.title }</h2>
                                </div>
                                {
                                    item.items.length > 0
                                        ? <div className="cober--ItemContent text-left">
                                            <ul className="pl-0">
                                                {
                                                    item.items.map( (listItem,index)=>(
                                                        <li key={index}>{listItem.header}
                                                            <ul>
                                                                {
                                                                    listItem.content.map((sublistItem,index)=>(
                                                                        <li key={index}>{ sublistItem }</li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        : <div className="cober--ItemContent">
                                            <p>
                                                { item.p }
                                            </p>
                                        </div>
                                }
                                
                            </div>
                            

                        ))
                    }

                    
                </section>

            </main>

            <style jsx>{`
                .quienesSomos-page h1,
                .quienesSomos-page h2,
                .quienesSomos-page h3,
                .quienesSomos-page h4,
                .quienesSomos-page p {
                  margin: 0;
                  padding: 0;
                }

                .quienesSomos-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }

                .quienesSomos-page h2 {
                  font-size: 20px;
                }

                .quienesSomos-page .container {
                  width: 1024px;
                  margin: auto;
                }

                .quienesSomos-page section.cober--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }

                .quienesSomos-page section.cober--Items p {
                  font-size: 16px;
                  font-weight: 400;
                }

                .quienesSomos-page .cober--header {
                  width: 80%;
                }

                .quienesSomos-page .cober--header p {
                  text-align: left;
                }

                .quienesSomos-page .cober--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                }

                .quienesSomos-page .cober--Item {
                  margin-bottom: 20px;
                }

                .quienesSomos-page .cober--itemTitle {
                  overflow: hidden;
                }

                .quienesSomos-page .cober--itemTitle a {
                  font-size: 24px;
                }

                .quienesSomos-page .cober--ItemContent,
                .quienesSomos-page .cober--headerContent,
                .quienesSomos-page .subItem .cober--ItemTitle {
                  width: 90%;
                  margin: auto;
                  margin-top: 20px;
                }

                .quienesSomos-page .cober--ItemContent p,
                .quienesSomos-page .cober--headerContent p,
                .quienesSomos-page .subItem .cober--ItemTitle p {
                  text-align: left;
                }

                .quienesSomos-page .cober--ItemContent li,
                .quienesSomos-page .cober--headerContent li,
                .quienesSomos-page .subItem .cober--ItemTitle li {
                  font-size: 16px;
                  font-weight: 400;
                }

                @media (max-width: 992px) {
                  .quienesSomos-page .container {
                    width: 90%;
                    margin: auto;
                  }
              
                  .quienesSomos-page section.cober--Items {
                    margin-top: 70px;
                  }
                }

                @media (max-width: 578px) {
                  .quienesSomos-page section.cober--Items {
                    margin-top: 90px;
                  }
                }

            `}</style>
        </Container>
    )
}

