import Head from "next/head";
import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import Container from "../../components/layouts/Container";
import { faqsItems } from "../../data/faqs-data";

export default function Faqs() {
    
    return (
        <Container>

            <Head>
                <title>FAQS-CAA</title>
            </Head>

            <main className="faqs-page">
                <section className=" container faqs-Items">
                    <div className="faqs--header mb-3">
                        <h1 className="faqs--Title text-primary">Preguntas Frecuentes Seguro de viaje Asistur</h1>
                        <p className="faqs--headerContent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ab.
                            Temporibus dolorem, fugit asperiores explicabo ullam voluptate corrupti placeat magni!
                        </p>
                    </div>

                    {
                        faqsItems.map( (faqsItem,index) =>(

                            <div 
                                key={ faqsItem.id } 
                                className="faqs--Item"
                            >
                                <div className="faqs--itemTitle d-flex justify-content-between" >
                                    <h2 className="faqs--question text-primary align-self-baseline text-left" >{ faqsItem.itemTitle }</h2>
                                    
                                </div>
                                <div className="faqs--ItemContent active" >
                                    <p>{ ReactHtmlParser(faqsItem.htmlContent)  }</p>
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

