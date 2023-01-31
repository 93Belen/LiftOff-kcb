import { Container, FloatingLabel, Form, FormControl, FormGroup, Row, Col, FormSelect, FormCheck } from "react-bootstrap"
import { useSelector } from "react-redux";
import { selectbusinessToEdit, selectEditingAdding } from "../../state-redux/Store/Selectors";
import { DoneAdding } from "../Buttons/DoneAdding";
import { DoneEditing } from "../Buttons/DoneEditing";
import "./Form.css";



export const FormElement = () => {
    const editingAdding = useSelector(selectEditingAdding);
    const businessToEdit = useSelector(selectbusinessToEdit);
    console.log(businessToEdit);

    let button;
    if(editingAdding === 'adding'){
        button = <DoneAdding />
    }
    else if(editingAdding === 'editing'){
        button = <DoneEditing />
    }
    
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
                    <FormControl value={businessToEdit ? businessToEdit.name : ""} id='business-name' type='text' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-3'
                >
                    <FloatingLabel
                    label='Business Type'
                    >
                    <FormControl value={businessToEdit ? businessToEdit.businessType.name : ""} id='business-type' type='text' list='businessType' />
                        <datalist id='businessType'>
                            <option>Coffee</option>
                            <option>Food</option>
                            <option>Clothing</option>
                            <option>Home Goods</option>
                        </datalist>
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                className='mb-3 input'
                >
                    <Row>
                        <Col>
                    <FloatingLabel
                    label='County'>
                    <FormSelect value={businessToEdit ? businessToEdit.businessLocation.county : ""} id='county' type='text'>
                        <option selected></option>
                        <option>Jackson</option>
                        <option>Clinton</option>
                        <option>Caldwell</option>
                        <option>Platte</option>
                        <option>Clay</option>
                        <option>Ray</option>
                        <option>Leavenworth</option>
                        <option>Wyandotte</option>
                        <option>Lafayette</option>
                        <option>Johnson</option>
                        <option>Miami</option>
                        <option>Cass</option>
                        <option>Linn</option>
                        <option>Bates</option>
                    </FormSelect>
                    </FloatingLabel>
                    </Col>
                    <Col>
                    <FloatingLabel
                    label='City'
                    >
                    <FormControl value={businessToEdit ? businessToEdit.businessLocation.city : ""} id='business-city' type='text' list='city' />
                    <datalist id='city'>
                        <option>Cameron</option>
                        <option>Hamilton</option>
                        <option>Platte City</option>
                        <option>Leavenworth</option>
                        <option>Gladston</option>
                        <option>Liberty</option>
                        <option>Richmond</option>
                        <option>Kansas City</option>
                        <option>Shawnee</option>
                        <option>Independence</option>
                        <option>Prairrie Village</option>
                        <option>Raytown</option>
                        <option>Blue Springs</option>
                        <option>Odessa</option>
                        <option>Lee's Summit</option>
                        <option>Grandview</option>
                        <option>Overland Park</option>
                        <option>Lenexa</option>
                        <option>Leawood</option>
                        <option>Olathe</option>
                        <option>Gardner</option>
                        <option>Paola</option>
                        <option>Belton</option>
                        <option>Raymore</option>
                        <option>Pleasanton</option>
                        <option>Butler</option>
                    </datalist>
                    </FloatingLabel>
                    </Col>
                    <Col>
                    <FloatingLabel
                    label='Zipcode'
                    >
                    <FormControl value={businessToEdit ? businessToEdit.businessLocation.zipCode : ""} id='zipcode' type='number' max='68000' min='64000' />
                    </FloatingLabel>
                    </Col>
                    </Row>
                    <Row
                    className='mt-1'>
                        <Col>
                        <FloatingLabel
                    label='Street and number'
                    >
                    <FormControl id='address-description' type='text' />
                    </FloatingLabel>
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup
                className='mb-3 input'
                >
                    <FloatingLabel
                    label='Description'
                    >
                    <FormControl value={businessToEdit ? businessToEdit.businessDetails.description : ""} id='description' as='textarea' />
                    </FloatingLabel>
                </FormGroup>
                <FormGroup
                id='owner'
                className='mb-3 input'
                >
                    <Container>
                    <Row>
                        <Col>
                            <FormCheck
                            id='woman-owned'
                            className='ownerType'
                            value='Woman'
                            type='switch'
                            label='Woman'
                            />
                        </Col>
                        <Col>
                            <FormCheck
                            id='black-owned'
                            className='ownerType'
                            value='Black'
                            type='switch'
                            label='Black'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormCheck
                            id='latino-owned'
                            className='ownerType'
                            value='Latino'
                            type='switch'
                            label='Latino'
                            />
                        </Col>
                        <Col>
                            <FormCheck
                            id='inmigrant-owned'
                            className='ownerType'
                            value='Immigrant'
                            type='switch'
                            label='Inmigrant'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormCheck
                            id='lgbtqia-owned'
                            type='switch'
                            value='LGBTQIA'
                            className='ownerType'
                            label='LGBTQIA'
                            />
                        </Col>
                        <Col>
                            <FormCheck
                            id='asian-owned'
                            className='ownerType'
                            value='Asian'
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
                    <FormControl value={businessToEdit ? businessToEdit.businessDetails.websiteUrl : ""} id='website' type='text' />
                    </FloatingLabel>
                </FormGroup>
                    </Col>
                    <Col>
                    {/* Done Editing and Done Adding buttons have to be changed when needed */}
                    {button}
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}