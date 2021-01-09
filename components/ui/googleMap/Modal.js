import {Modal} from 'antd';

export const CustomModal = ({children , visible, setVisible, title= "Mapa de Cuba" }) => {


    return (
        <>
            
            <Modal 
                title={ title }
                
                style={{ top: 20 }}
                zIndex={9999}
                bodyStyle={{height: "80vh"}}
                visible={visible}
                width={ 1200 }           
                onOk={ () => setVisible(false) }
                onCancel={ () => setVisible(false) }
            >   
                <div className="body-wrapper">
                    {children} 
                </div>
            </Modal>

            <style jsx>{`
                .body-wrapper{
                    position: static
                }
            `}</style>
        </>
    );
};

