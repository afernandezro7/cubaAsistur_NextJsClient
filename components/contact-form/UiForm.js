import { useForm } from "../../hooks/useForm"
import validator from 'validator'
import { useState } from "react"
import Swal from "sweetalert2"

export const UiForm = () => {

    const [ formValues, handleInputChange, reset ]= useForm({
        name:'',
        email: '',
        whatsApp: '',
        message: ''
    })
    const { name, email, whatsApp, message } = formValues
    const [isValidForm, setIsValidForm] = useState(true)

    const handleSubmit = ( e )=>{
        e.preventDefault();
        
        //Validar formvalues
        if(name.trim()==='' || message.trim()==='' || !validator.isEmail(email.trim()) ){
            setIsValidForm( false )
            return
        }

        // TODO: Enviar datos de contacto
        Swal.fire('OK', 'Su mensaje ha sido enviado con éxito' ,'success')

        //Reset form values
        reset()
        setIsValidForm( true )
    }

    return (
        <form
            onSubmit={ handleSubmit }
        > 
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className={`${ (isValidForm || !!name) ? 'form-control' : 'form-control is-invalid'}`}
                            placeholder="su nombre (requerido)" 
                            name="name"
                            value= { name }
                            onChange= { handleInputChange }

                        />
                        <div className="invalid-feedback">
                            Porfavor introduzca su nombre!
                        </div>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className={`${(isValidForm || validator.isEmail(email)) ? 'form-control' : 'form-control is-invalid'}`}
                            placeholder="su email (requerido)"
                            name="email"
                            value= { email }
                            onChange= { handleInputChange } 
                        />
                        <div className="invalid-feedback">
                            Porfavor introduzca su email!
                        </div>
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="su whatsApp"
                            name="whatsApp"
                            value= { whatsApp }
                            onChange= { handleInputChange }
                        />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 h-100">
                    <div className="form-group">
                        <textarea 
                            className={`${ (isValidForm || !!message) ? 'form-control' : 'form-control is-invalid'}`}                           
                            placeholder="su mensaje"
                            name="message"
                            value= { message }
                            onChange= { handleInputChange }
                        /> 
                        <div className="invalid-feedback">
                            Porfavor introduzca su mensaje!
                        </div>                      
                    </div>
                </div>
            </div>
            <div className="row botonenviar justify-content-lg-end justify-content-md-end justify-content-sm-center">
                <div className="col-2 w-25 ">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                    >
                        ENVIAR
                    </button>
                </div>
            </div>



            <style jsx>{`
                .form-control {
                    background-color: white ;
                }
                .form-control::placeholder {
	                font-size: 16px;
                }
                .invalid-feedback {
	                font-size: 100%;
	                color: #fff;
                }

            `}</style>
        </form>

    )
}



