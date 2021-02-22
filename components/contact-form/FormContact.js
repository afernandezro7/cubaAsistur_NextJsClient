import { useSelector } from 'react-redux';
import { UiForm } from './UiForm';


export const FormContact = () => {

    const { content:{contact} } = useSelector( state => state.lang );

    return (
        <section> 
            <div className="container-fluid bg-success">
                <img 
                    className="img-fluid img-brand2 pt-3"
                    src="/assets/images/Logo-CAA-1.png" 
                    alt="Logo de CubaAsistur" 
                />
                <h2 className="display-4 font-weight-bold text-white">{contact.header.toUpperCase()}</h2>
                
                <UiForm
                    language ={ contact }
                />
              

            </div>

        </section>

    )
}
