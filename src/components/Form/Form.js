import { Container, FloatingLabel, Form, FormControl, FormGroup, Row, Col, FormSelect, FormCheck } from "react-bootstrap"
import { DoneEditing } from "../Buttons/DoneEditing";
import "./Form.css";



export const FormElement = () => {
    return (
        <Container
        id='formDiv'
        >
            <svg id='svg' viewBox="0 0 734 909" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M87.3886 864.659L54.5953 43.3376L684.654 2.6567L730.866 778.829L87.3886 864.659Z" stroke="#AA283C" stroke-width="5" stroke-linejoin="round"/>
<path d="M35.3886 905.659L2.59533 84.3376L632.654 43.6567L678.866 819.829L35.3886 905.659Z" stroke="#201D1D" stroke-width="5" stroke-linejoin="round"/>
            </svg>
            <Form id='form'>
                <FormGroup
                className='mb-3 input'
                >
                    <FloatingLabel
                    label='Name'
                    >
                    <FormControl type='text' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-3'
                >
                    <FloatingLabel
                    label='Business Type input'
                    >
                    <FormSelect>
                        <option>Coffee</option>
                        <option>Food</option>
                        <option>Clothing</option>
                        <option>Home Goods</option>
                        <option>Others</option>
                    </FormSelect>
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-3 input'
                >
                    <FloatingLabel
                    label='Adress'
                    >
                    <FormControl type='text' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-3 input'
                >
                    <FloatingLabel
                    label='Description'
                    >
                    <FormControl as='textarea' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-3 input'
                >
                    <Container>
                    <Row>
                        <Col>
                            <FormCheck
                            type='switch'
                            label='Woman'
                            />
                        </Col>
                        <Col>
                            <FormCheck
                            type='switch'
                            label='Black'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormCheck
                            type='switch'
                            label='Latino'
                            />
                        </Col>
                        <Col>
                            <FormCheck
                            type='switch'
                            label='Inmigrant'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormCheck
                            type='switch'
                            label='LGBTQIA'
                            />
                        </Col>
                        <Col>
                            <FormCheck
                            type='switch'
                            label='Asian'
                            />
                        </Col>
                    </Row>
                    </Container>
                </FormGroup>
                <Row>
                    <Col>
                    <FormGroup
                className='mb-3 input'
                >
                    <FloatingLabel
                    label='Website link'
                    >
                    <FormControl type='text' />
                    </FloatingLabel>
                </FormGroup>
                    </Col>
                    <Col>
                    <DoneEditing />
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}