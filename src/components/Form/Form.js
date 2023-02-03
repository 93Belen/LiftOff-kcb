import { useEffect, useState } from "react";
import { Container, FloatingLabel, Form, FormControl, FormGroup, Row, Col, FormSelect, FormCheck, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { selectbusinessToEdit, selectEditingAdding } from "../../state-redux/Store/Selectors";
import { DoneAdding } from "../Buttons/DoneAdding";
import { DoneEditing } from "../Buttons/DoneEditing";
import "./Form.css";






export const FormElement = () => {
    const editingAdding = useSelector(selectEditingAdding);


    let button;
    if (editingAdding === 'adding') {
        button = <DoneAdding />
    }
    else if (editingAdding === 'editing') {
        button = <DoneEditing />
    }

    // Testing Zone #2

    const [selectedOwnerTypes, setSelectedOwnerTypes] = useState([]);

    const handleChange = event => {
        setSelectedOwnerTypes(prevTypes => {
            const newTypes = [...prevTypes];
            if (event.target.checked) {
                newTypes.push(event.target.value);
            } else {
                const index = newTypes.indexOf(event.target.value);
                newTypes.splice(index, 1);
            }
            setForm({ ...form, businessIdentity: newTypes });
            return newTypes;
        });
    };

    // End Testing Zone #2
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {

        setForm({ ...form, [field]: value });

        if (!!errors[field])
            setErrors({ ...errors, [field]: null });
    }

    const validateForm = () => {
        const { businessName, businessTypes, businessCounty, businessCity, businessZipCode, businessStreetNumber, businessDescription, businessWebsiteLink, businessIdentity } = form
        const newErrors = {}

        if (!businessName || businessName === '') newErrors.businessName = 'Please enter your name.'
        else if (businessName.length <= 2) newErrors.businessName = 'Name must be longer than two characters.'
        if (!businessTypes || businessTypes === '') newErrors.businessTypes = 'Please select your Business Type.'
        if (!businessCounty || businessCounty === '') newErrors.businessCounty = 'Please select a County.'
        if (!businessCity || businessCity === '') newErrors.businessCity = 'Please select a City.'
        if (!businessZipCode || businessZipCode === '') newErrors.businessZipCode = 'Please enter your Zip Code.'
        if (!businessStreetNumber || businessStreetNumber === '') newErrors.businessStreetNumber = 'Please enter your Business street name and number.'
        if (!businessDescription || businessDescription === '') newErrors.businessDescription = 'Please enter a description for your business.'
        if (!businessWebsiteLink || businessWebsiteLink === '') newErrors.businessWebsiteLink = 'Please enter your business website link.'
        if (!businessIdentity || !businessIdentity.length === 0) newErrors.businessIdentity = 'Please select one or more values for business identity.'
        return newErrors
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
        } else {
            console.log('Form Submitted')
            console.log(form)
        }
    };

    return (
        <Container
            id='formDiv'
        >
            <svg id='svg' viewBox="0 0 734 909" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M87.3886 864.659L54.5953 43.3376L684.654 2.6567L730.866 778.829L87.3886 864.659Z" stroke="#AA283C" stroke-width="5" stroke-linejoin="round" />
                <path d="M35.3886 905.659L2.59533 84.3376L632.654 43.6567L678.866 819.829L35.3886 905.659Z" stroke="#201D1D" stroke-width="5" stroke-linejoin="round" />
            </svg>
            <Form id='form'>


                <FormGroup className='mb-3 input' controlId="businessName">
                    <FloatingLabel label='Name'>
                        <FormControl
                            id='business-name'
                            type='text'
                            value={form.businessName}
                            onChange={(e) => setField('businessName', e.target.value)}
                            isInvalid={!!errors.businessName} />
                        <Form.Control.Feedback type='invalid'>
                            {errors.businessName}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </FormGroup>


                <FormGroup className='mb-3'>
                    <FloatingLabel label='Business Type' controlId="businessTypes">
                        <FormControl
                            id='business-type'
                            type='text'
                            value={form.businessTypes}
                            list='businessType'
                            onChange={(e) => setField('businessTypes', e.target.value)}
                            isInvalid={!!errors.businessTypes} />
                        <Form.Control.Feedback type='invalid'>
                            {errors.businessTypes}
                        </Form.Control.Feedback>
                        <datalist id='businessType'>
                            <option>Coffee</option>
                            <option>Food</option>
                            <option>Clothing</option>
                            <option>Home Goods</option>
                        </datalist>
                    </FloatingLabel>
                </FormGroup>


                <FormGroup className='mb-3 input'>
                    <Row>
                        <Col>
                            <FloatingLabel label='County' controlId="businessCounty">
                                <FormSelect
                                    id='county'
                                    type='text'
                                    value={form.businessCounty}
                                    onChange={(e) => setField('businessCounty', e.target.value)}
                                    isInvalid={!!errors.businessCounty}>
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
                                <Form.Control.Feedback type='invalid'>
                                    {errors.businessCounty}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>


                        <Col>
                            <FloatingLabel label='City' controlId="businessCity">
                                <FormControl
                                    id='business-city'
                                    type='text'
                                    list='city'
                                    value={form.businessCity}
                                    onChange={(e) => setField('businessCity', e.target.value)}
                                    isInvalid={!!errors.businessCity} />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.businessCity}
                                </Form.Control.Feedback>
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
                            <FloatingLabel label='Zipcode' controlId="businessZipCode">
                                <FormControl
                                    id='zipcode'
                                    type='number'
                                    value={form.businessZipCode}
                                    max='68000' min='64000'
                                    onChange={(e) => setField('businessZipCode', e.target.value)}
                                    isInvalid={!!errors.businessZipCode} />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.businessZipCode}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </Row>


                    <Row className='mt-1'>
                        <Col>
                            <FloatingLabel label='Street and number' controlId="businessStreetNumber">
                                <FormControl
                                    id='address-description'
                                    type='text'
                                    value={form.businessStreetNumber}
                                    onChange={(e) => setField('businessStreetNumber', e.target.value)}
                                    isInvalid={!!errors.businessStreetNumber} />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.businessStreetNumber}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </Row>
                </FormGroup>


                <FormGroup className='mb-3 input' controlId="businessDescription">
                    <FloatingLabel label='Description'>
                        <FormControl
                            id='description'
                            as='textarea'
                            value={form.businessDescription}
                            onChange={(e) => setField('businessDescription', e.target.value)}
                            isInvalid={!!errors.businessDescription} />
                        <Form.Control.Feedback type='invalid'>
                            {errors.businessDescription}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </FormGroup>


                <FormGroup controlId='businessIdentity' id='owner' className='mb-3 input'>
                    <Container>

                        <Row>
                            <Col>
                                <FormCheck
                                    id='woman-owned'
                                    className='ownerType'
                                    value='Woman'
                                    type='switch'
                                    label='Woman'
                                    onChange={handleChange}
                                />
                            </Col>


                            <Col>
                                <FormCheck
                                    id='black-owned'
                                    className='ownerType'
                                    value='Black'
                                    type='switch'
                                    label='Black'
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <FormCheck
                                    id='inmigrant-owned'
                                    className='ownerType'
                                    value='Immigrant'
                                    type='switch'
                                    label='Inmigrant'
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </Col>


                            <Col>
                                <FormCheck
                                    id='asian-owned'
                                    className='ownerType'
                                    value='Asian'
                                    type='switch'
                                    label='Asian'
                                    onChange={handleChange}
                                />


                            </Col>
                        </Row>

                    </Container>
                    <Form.Text className="text-danger">
                        {!!errors.businessIdentity && (
                            <div>{errors.businessIdentity}</div>
                        )}
                    </Form.Text>
                </FormGroup>


                <Row>
                    <Col>
                        <FormGroup className='mb-3 input' controlId="businessWebsiteLink">
                            <FloatingLabel label='Website link'>
                                <FormControl
                                    id='website'
                                    type='text'
                                    value={form.businessWebsiteLink}
                                    onChange={(e) => setField('businessWebsiteLink', e.target.value)}
                                    isInvalid={!!errors.businessWebsiteLink} />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.businessWebsiteLink}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </FormGroup>
                    </Col>
                    <Col>
                        {/* Done Editing and Done Adding buttons have to be changed when needed */}
                        {button}
                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            variant='primary'>
                            Test Button
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
