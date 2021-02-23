import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import Container from "../../components/layouts/Container";


export default function Faqs() {

    const { faqsPage } = useSelector( state => state.lang.content );
    
    
    return (
        <Container>

            <Head>
                <title>{faqsPage.header}</title>
            </Head>

            <main className="faqs-page">
                <section className=" container faqs-Items">
                    <div className="faqs--header mb-3">
                        <h1 className="faqs--Title text-primary">{faqsPage.h1}</h1>
                        <p className="faqs--headerContent">{faqsPage.description}</p>
                    </div>

                    {
                        faqsPage.faqsItems.map( (faqsItem, index) =>(

                            <div 
                                key={ index } 
                                className="faqs--Item"
                            >
                                <div className="faqs--itemTitle d-flex justify-content-between" >
                                    <h2 className="faqs--question text-primary align-self-baseline text-left" >{ faqsItem.itemTitle }</h2>
                                    
                                </div>
                                <div className="faqs--ItemContent active" >
                                    <p>
                                        { faqsItem.htmlContent }&nbsp;
                                        {
                                            (faqsItem.link.length >0)
                                                ? faqsItem.link[0]==='int'
                                                    ? <Link href={`${faqsItem.link[1]}`}><a>{faqsItem.link[2]}</a></Link>
                                                    : <a href={`${faqsItem.link[1]}`} target="_blank" rel="noopener noreferrer">{faqsItem.link[2]}</a>
                                                :null
                                        }
                                    
                                    </p>
                                </div>
                                
                            </div>
                        ))
                    }


                </section>
            </main>

            <style jsx>
                {`
                .faqs-page h1, .faqs-page h2, .faqs-page h3, .faqs-page h4, .faqs-page p {
                  margin: 0;
                  padding: 0;
                }
                .faqs-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }
                .faqs-page h2 {
                  font-size: 20px;
                }
                .faqs-page .container {
                  width: 1024px;
                  margin: auto;
                }
                .faqs-page section.faqs-Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }
                .faqs-page section.faqs-Items p {
                  font-size: 16px;
                  font-weight: 400;
                }
                .faqs-page .faqs--Title {
                  font-size: 32px;
                  text-shadow: none;
                  text-align: left;
                }
                .faqs-page .faqs--Item {
                  margin-bottom: 20px;
                }
                .faqs-page .faqs--itemTitle {
                  overflow: hidden;
                }
                .faqs-page .faqs--itemTitle a {
                  font-size: 24px;
                }
                .faqs-page .faqs--header p {
                  text-align: left;
                }
                .faqs-page .faqs--ItemContent {
                  display: none;
                  overflow: hidden;
                  transition: height 1s ease-in-out;
                  -webkit-transition: height 1s ease-in-out;
                  -moz-transition: height 1s ease-in-out;
                  -ms-transition: height 1s ease-in-out;
                  -o-transition: height 1s ease-in-out;
                }
                .faqs-page .faqs--ItemContent p {
                  text-align: left;
                  width: 90%;
                  margin: auto;
                }
                .faqs-page .faqs--ItemContent a {
                  display: inline-block;
                  color: #084c79;
                }
                .faqs-page .faqs--ItemContent.active {
                  display: block;
                }
                
                @media (max-width: 992px) {
                  .faqs-page .container {
                    width: 90%;
                    margin: auto;
                  }
                  .faqs-page section.faqs-Items {
                    margin-top: 70px;
                  }
                }
                @media (max-width: 578px) {
                  .faqs-page section.faqs-Items {
                    margin-top: 90px;
                  }
                }                
            `}</style>
        </Container>
    )
}

