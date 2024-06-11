import { Col, Modal, Row } from "react-bootstrap";
import ButtonComponent from "./buttonComponent";


const ModalComponent = ({isOpen, onClose, children})=>{
    return (
        <Modal show={isOpen} onHide={onClose}>
            {children}
        </Modal>
    )
}

export const ModalHeader = ({title})=>{
    return (
        <Modal.Header  className="modal-header" closeButton >
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>  
    )
}
export const ModalBody = ({children})=>{
    return(
        <Modal.Body>{children}</Modal.Body>  
    )
}

export const ModalFooter =({children})=>{
    return( <Modal.Footer>
       {children}
        </Modal.Footer>)
}



export default ModalComponent;