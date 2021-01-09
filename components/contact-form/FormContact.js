import { UiForm } from './UiForm';


export const FormContact = () => {
    return (
        <section> 
            <div className="container-fluid bg-success">
                <img 
                    className="img-fluid img-brand2 pt-3"
                    src="/assets/images/Logo-CAA-1.png" 
                    alt="Logo de CubaAsistur" 
                />
                <h2 className="display-4 font-weight-bold text-white">CONTÁCTENOS</h2>
                
                <UiForm/>
              

                <div className="modal fade" id="exampleModal2"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel2"
                    aria-hidden="true"
                >
                    <div 
                        className="modal-dialog" 
                        role="document"
                        style={{ maxWidth: '500px' }}
                    >
                        <div className="modal-content">
                            <div className="modal-header justify-content-center">
                                <h5 className="modal-title" id="exampleModalLabel2">Su mensaje sido enviado con éxito</h5>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-primary" data-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
