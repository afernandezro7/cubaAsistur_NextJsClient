import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import Container from "../../components/layouts/Container";

export default function TerminosCondiciones() {

    const { content:{termsPage:language} } = useSelector( state => state.lang );

    return (
        <Container>

            <Head>
                <title>{ language.header }</title>
            </Head>

            <main className="terms-page">
                <section className=" container terms--Items">
                    <div className="terms--header mb-3">
                        <h1 className="terms--Title text-primary">{ language.h1 }</h1>
                        <p className="terms--headerContent">{ language.description }</p>
                    </div>

                    {
                        language.terms.map( (item, index)=>(

                            <div className="terms--Item " key={index}>
                                <div className="terms--ItemTitle text-primary d-flex justify-content-start ">
                                    <h2 className="terms--Tema text-primary ">{ item.label }</h2>
                                </div>
                                <div className="terms--ItemContent">
                                    {
                                        item.paragraphs.map ( (p,i) =>(
                                            <p key={i}>
                                                {p}&nbsp;
                                                {
                                                    (item.link.length >0 && i === item.link[3])
                                                        ? item.link[0]==='int'
                                                            ? <Link href={`${item.link[1]}`}><a>{item.link[2]}</a></Link>
                                                            : <a href={`${item.link[1]}`}>{item.link[2]}</a>
                                                        :null
                                                }
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }

                    
                </section>
            </main>

            <style jsx> {`
                .terms-page h1,
                .terms-page h2,
                .terms-page h3,
                .terms-page h4,
                .terms-page p {
                  margin: 0;
                  padding: 0;
                }

                .terms-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }

                .terms-page h2 {
                  font-size: 20px;
                }

                .terms-page .container {
                  width: 1024px;
                  margin: auto;
                }

                .terms-page section.terms--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }

                .terms-page section.terms--Items p {
                  font-size: 16px;
                  font-weight: 400;
                }

                .terms-page .terms--header {
                  width: 90%;
                }

                .terms-page .terms--header p {
                  text-align: left;
                }

                .terms-page .terms--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                }

                .terms-page .terms--Item {
                  margin-bottom: 20px;
                }

                .terms-page .terms--itemTitle {
                  overflow: hidden;
                }

                .terms-page .terms--itemTitle a {
                  font-size: 24px;
                }

                .terms-page .terms--ItemContent,
                .terms-page .terms--headerContent,
                .terms-page .subItem .terms--ItemTitle {
                  width: 90%;
                  margin: auto;
                  margin-top: 20px;
                }

                .terms-page .terms--ItemContent p,
                .terms-page .terms--headerContent p,
                .terms-page .subItem .terms--ItemTitle p {
                  text-align: left;
                  margin-bottom: 15px;
                }

                .terms-page .terms--ItemContent a,
                .terms-page .terms--headerContent a,
                .terms-page .subItem .terms--ItemTitle a {
                  color: #074e7c;
                }

                .terms-page table th,
                .terms-page table td {
                  text-align: left;
                }

                .terms-page table th:nth-child(2),
                .terms-page table td:nth-child(2) {
                  text-align: center;
                }

                @media (max-width: 992px) {
                  .terms-page .container {
                    width: 90%;
                    margin: auto;
                  }
              
                  .terms-page section.terms--Items {
                    margin-top: 70px;
                  }
                }

                @media (max-width: 578px) {
                  .terms-page section.terms--Items {
                    margin-top: 90px;
                  }
                }
                
            `}</style>
        </Container>
    )
}

