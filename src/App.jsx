import { useState } from 'react'
import './App.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles.scss'


import Button from 'react-bootstrap/Button';
import ModalComponent, { ModalBody, ModalFooter, ModalHeader } from './components/modal';

import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onClose = ()=>setIsModalOpen(!isModalOpen)

  return (
    <>
      <Button variant='primary' onClick={onClose}>Editar</Button>
      {/* MODAL */}
      <ModalComponent isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}>
        <ModalHeader title="Edición de permiso" />
        <ModalBody>
        
          <PermissionForm/>
        
        </ModalBody>
        <ModalFooter>
          <>
          <Button variant='light' onClick={onClose}>Cancelar</Button>
          <Button variant='primary' onClick={onClose}>Guardar</Button>
          </>
        </ModalFooter>
      </ModalComponent>
    </>
  )
}


const PermissionForm = ()=>{
  return(
    <Form  className='modal-form'>
      <Row>
        <Col xs={12} md={6}>
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control type="text" value="Tatania Lucía Balsquez Ortis"  disabled/>
        </Col>
        <Col xs={12} md={6}>
        <Form.Label>Identificador</Form.Label>
        <Form.Control type="text" value="888888888"  disabled/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Form.Label>Motivo</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Seleccionar  </option>
            <option value="vations">Vacaciones</option>
            <option value="medicalLicense ">Licencia medica</option>
            <option value="other">Otro</option>
          </Form.Select>
        </Col> 
      </Row>
      <Row>
        <Col xs={12} md={12}>
        <Form.Label>Comentario</Form.Label>
        <Form.Control
          className='fixed-textarea'
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
        </Col> 
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Form.Label>Permiso dado por</Form.Label>
          <Form.Control type="text" value="Sandra Benavente Cerda"  disabled/>
        </Col>
      </Row>
    </Form>
  )
}
export default App
