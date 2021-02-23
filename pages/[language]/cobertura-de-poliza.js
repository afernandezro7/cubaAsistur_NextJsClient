import Container from '../../components/layouts/Container'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import html from 'react-inner-html';


export default function CoberturaPoliza() {

    const lang = useSelector( state => state.lang );
    const { content: { coveragePolicyPage } } = lang

    return (
        <Container>

            <Head>
                <title>{ coveragePolicyPage.header }</title>
            </Head>

            <main className="coberPolizas-page">
                <section className = " container cober--Items"> 
                    <div className="cober--header mb-3">
                        <h1 className="cober--Title text-primary">{ coveragePolicyPage.h1 }</h1>
                        <p className="cober--headerContent">{ coveragePolicyPage.description }</p>
                    </div>
                    <div className="cober--Item">
                        <div className="cober--ItemTitle text-primary text-center">
                            <h2 className="cober--Tema text-primary">{ coveragePolicyPage.tableTittle }</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th colSpan={2} scope="col">{ coveragePolicyPage.table.headtitle }</th>
                                        <th scope="col">{ coveragePolicyPage.table.headinfo }</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        coveragePolicyPage.table.body.map( (item,index)=>(
                                            item.head
                                                ?
                                                <tr key={index}>
                                                    <th colSpan={2} scope="col" {...html(item.lItem)}/>
                                                    <th scope="col" {...html(item.rItem)}/>
                                                </tr>
                                                :
                                                <tr key={index}>
                                                    <td colSpan={2} {...html(item.lItem)}/>
                                                    <td {...html(item.rItem)}/>
                                                </tr>
                                        ))
                                    }
                                    
                                    <tr>
                                        <td colSpan={3}>
                                            <div className="d-flex">
                                                <span className="d-block pr-1">
                                                    <b>{ coveragePolicyPage.table.extraPrima.head}</b>
                                                </span>
                                                <span className="d-block">
                                                    { coveragePolicyPage.table.extraPrima.p1}<br/>
                                                    { coveragePolicyPage.table.extraPrima.p2}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr style={
                            {
                                backgroundColor: '#4386b3',
                                marginTop: '2px',
                                marginBottom: '2px'
                            }
                        }/>
                    </div>

                    <div className="cober--Item ">
                        <div className="cober--ItemTitle text-primary d-flex justify-content-start ">
                            <h2 className="cober--Tema text-primary ">{ coveragePolicyPage.exclusion.header }</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>{ coveragePolicyPage.exclusion.info }</p>
                        </div>
                    </div>

                    {
                        coveragePolicyPage.exclusion.exTerms.map( (term,index)=>(

                            <div className="cober--Item subItem" key={index}>
                                <div className="cober--ItemTitle text-primary d-flex text-left ">
                                    <h2 className="cober--Tema text-primary ">{ term.label }</h2>
                                </div>
                                <div className="cober--ItemContent">
                                    <p>
                                        { term.termInfo }
                                        {
                                            term.link && 
                                                <Link href={`/${lang.currentLang.toLowerCase()}/faqs`} >
                                                    <a 
                                                        className="text-primary" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                    >
                                                        {term.link}
                                                    </a>

                                                </Link>
                                        }
                                    </p>
                                </div>
                            </div>
                        )) 
                    }
                    

                    
                    
                </section>

            </main>

            <style jsx>{`
                .coberPolizas-page h1,
                .coberPolizas-page h2,
                .coberPolizas-page h3,
                .coberPolizas-page h4,
                .coberPolizas-page p {
                  margin: 0;
                  padding: 0;
                }

                .coberPolizas-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }

                .coberPolizas-page h2 {
                  font-size: 20px;
                }

                .coberPolizas-page .container {
                  width: 1024px;
                  margin: auto;
                }

                .coberPolizas-page section.cober--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }

                .coberPolizas-page section.cober--Items p {
                  font-size: 16px;
                  font-weight: 400;
                }

                .coberPolizas-page .cober--header p {
                  width: 90%;
                  text-align: left;
                }

                .coberPolizas-page .cober--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                  width: 90%;
                  margin: auto;
                }

                .coberPolizas-page .cober--Item {
                  margin-bottom: 20px;
                }

                .coberPolizas-page .cober--itemTitle {
                  overflow: hidden;
                }

                .coberPolizas-page .cober--itemTitle a {
                  font-size: 24px;
                }

                .coberPolizas-page .cober--ItemContent,
                .coberPolizas-page .cober--headerContent,
                .coberPolizas-page .subItem .cober--ItemTitle {
                  width: 90%;
                  margin: auto;
                  margin-top: 20px;
                }

                .coberPolizas-page .cober--ItemContent p,
                .coberPolizas-page .cober--headerContent p,
                .coberPolizas-page .subItem .cober--ItemTitle p {
                  text-align: left;
                }

                .coberPolizas-page table th,
                .coberPolizas-page table td {
                  text-align: left;
                }

                .coberPolizas-page table th:nth-child(2),
                .coberPolizas-page table td:nth-child(2) {
                  text-align: center;
                }

                @media (max-width: 992px) {
                  .coberPolizas-page .container {
                    width: 90%;
                    margin: auto;
                  }
              
                  .coberPolizas-page section.cober--Items {
                    margin-top: 70px;
                  }
                }

                @media (max-width: 578px) {
                  .coberPolizas-page section.cober--Items {
                    margin-top: 90px;
                  }
                }
            `}</style>
        </Container>
    )
}


