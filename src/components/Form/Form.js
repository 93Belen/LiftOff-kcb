import { useState } from "react";
import { Container, FloatingLabel, Form, FormControl, FormGroup, Row, Col, FormSelect, FormCheck } from "react-bootstrap"
import { useSelector } from "react-redux";
import { selectEditingAdding } from "../../state-redux/Store/Selectors";
import { DoneAdding } from "../Buttons/DoneAdding";
import { DoneEditing } from "../Buttons/DoneEditing";
import "./Form.css";

export const FormElement = () => {
    const editingAdding = useSelector(selectEditingAdding);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [disabled, setDisabled] = useState(true);
    console.log(disabled)

    let button;
    if (editingAdding === 'adding') {
        button = <DoneAdding disabled={disabled} />
    }
    else if (editingAdding === 'editing') {
        button = <DoneEditing disabled={disabled} />
    }

    const setField = (field, value) => {
        setForm({ ...form, [field]: value });
        if (!!errors[field])
            setErrors({ ...errors, [field]: null });
    }

    const validateForm = () => {
        const woman = document.getElementById('woman-owned').checked;
        const black = document.getElementById('black-owned').checked;
        const latino = document.getElementById('latino-owned').checked;
        const asian = document.getElementById('asian-owned').checked;
        const immigrant = document.getElementById('inmigrant-owned').checked;
        const lgbtqia = document.getElementById('lgbtqia-owned').checked;
        const checkInputs = [woman, black, latino, asian, immigrant, lgbtqia];

        // This regex matches empty strings and strings containing whitespaces only -> /^[\s]*$/
        // This regex matches any string that doesn't contain any special characters or numbers -> /^[a-zA-Z\s]+$/
    
        const { businessName, businessTypes, businessCounty, businessCity, businessZipCode, businessStreetNumber, businessDescription, businessWebsiteLink } = form
        const newErrors = {}
            // ---------------------- Business Name ----------------------
            if (!businessName || businessName === '' || (/^[\s]*$/.test(businessName))) newErrors.businessName = 'Please enter your Business Name.'              // Not empty & no whitespace
            else if (businessName.length < 2 || businessName.length > 20) newErrors.businessName = 'Business Name must be between 2-20 characters in length.'    // Checks length
            else if ((!/^[a-zA-Z\s]+$/.test(businessName))) newErrors.businessName = 'Please remove any special characters or numbers.'                 // No special char's or #'s

            // ---------------------- Business Type ----------------------
            if (!businessTypes || businessTypes === '' || (/^[\s]*$/.test(businessTypes))) newErrors.businessTypes = 'Please select or enter your Business Type.'
            else if (businessTypes.length < 2 || businessTypes.length > 20) newErrors.businessTypes = 'Business Type must be between 2-20 characters in length.'
            else if ((!/^[a-zA-Z\s&]+$/.test(businessTypes))) newErrors.businessTypes = 'Please remove any special characters or numbers.'

            // ---------------------- County ----------------------
            if (!businessCounty || businessCounty === '') newErrors.businessCounty = 'Please select a County.'
            else if ((!/^[A-Z][a-z]/.test(businessCounty))) newErrors.businessCounty = 'Please Capitalize the first letter in the County name.'

            // ---------------------- City ----------------------
            if (!businessCity || businessCity === '' || (/^[\s]*$/.test(businessCity))) newErrors.businessCity = 'Please select a City.'                // Not empty & no whitespace
            else if (businessCity.length < 2 || businessCity.length > 20) newErrors.businessCity = 'City must be between 2-20 characters in length.'    // Checks length
            else if ((!/^[a-zA-Z\s']+$/.test(businessCity))) newErrors.businessCity = 'Please remove any special characters or numbers.'                // No special char's or #'s (except: ')
            // This regext ↑↑↑↑↑ allows the → ' ← symbol to pass so City options like "Lee's Summit" passes. This can be updated to include other special characters.

            // ---------------------- Zip Code ----------------------
            if (!businessZipCode || businessZipCode === '') newErrors.businessZipCode = 'Please enter your Zip Code.'
            else if ((!/^\d+$/.test(businessZipCode))) newErrors.businessZipCode = 'Please remove any special characters.'

            // ---------------------- Street & Number ----------------------
            if (!businessStreetNumber || businessStreetNumber === '' || (/^[\s]*$/.test(businessStreetNumber))) newErrors.businessStreetNumber = 'Please enter your Business street name and number.'
            else if (businessStreetNumber.length < 2 || businessStreetNumber.length > 20) newErrors.businessStreetNumber = 'This Field must be between 2-20 characters in length.'

            // ---------------------- Description ----------------------
            if (!businessDescription || businessDescription === '' || (/^[\s]*$/.test(businessDescription))) newErrors.businessDescription = 'Please enter a description for your business.'
            else if (businessDescription.length < 10 || businessDescription.length > 160) newErrors.businessDescription = 'Description must be between 10-160 characters in length.'

            // ---------------------- Web Link ----------------------
            if (!businessWebsiteLink || businessWebsiteLink === '' || (/^[\s]*$/.test(businessWebsiteLink))) newErrors.businessWebsiteLink = 'Please enter your business website link.'
            else if (businessWebsiteLink.length < 2 || businessWebsiteLink.length > 100) newErrors.businessWebsiteLink = 'Website link must be between 2-100 characters in length.'
            else if ((!/^(https?:\/\/)?([\w\d]+\.)+[\w]+([\w\d-]+)*(\?[\w\d]+=[\w\d]+)*([\w\d]+=[\w\d]+)*\/?$/i.test(businessWebsiteLink))) newErrors.businessWebsiteLink = 'Please enter a valid webiste format.'
           
            // ---------------------- Identity ----------------------
            if(!checkInputs.includes(true)) newErrors.businessIdentity = 'Please select at least one options.'
        
        
        return newErrors   
    }
    const showMessages = () => {        
        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            setDisabled(() => true);
        } else {
            console.log('Form Submitted')
            console.log(form)
            setDisabled(() => false);

        }
    }

   

    return (
        <Container
            onKeyDown={showMessages}
            onKeyUp={showMessages}
            onClick={showMessages}
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
                            onChange={(e) =>setField('businessName', e.target.value)}
                            onFocus={(e) =>setField('businessName', e.target.value)}
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
                            list='businessType'
                            onChange={(e) => setField('businessTypes', e.target.value)}
                            onFocus={(e) => setField('businessTypes', e.target.value)}
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
                                    onChange={(e) => setField('businessCounty', e.target.value)}
                                    onFocus={(e) => setField('businessCounty', e.target.value)}
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
                                    onChange={(e) => setField('businessCity', e.target.value)}
                                    onFocus={(e) => setField('businessCity', e.target.value)}
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
                                    onFocus={(e) => setField('businessZipCode', e.target.value)}
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
                                    onChange={(e) => setField('businessStreetNumber', e.target.value)}
                                    onFocus={(e) => setField('businessStreetNumber', e.target.value)}
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
                            onChange={(e) => setField('businessDescription', e.target.value)}
                            onFocus={(e) => setField('businessDescription', e.target.value)}
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
                                    className='ownerType-switch'
                                    value='Woman'
                                    type='switch'
                                    label='Woman'
                                />
                            </Col>


                            <Col>
                                <FormCheck
                                    id='black-owned'
                                    className='ownerType-switch'
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
                                    className='ownerType-switch'
                                    value='Latino'
                                    type='switch'
                                    label='Latino'
                                />
                            </Col>
                            <Col>
                                <FormCheck
                                    id='inmigrant-owned'
                                   className='ownerType-switch'
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
                                    className='ownerType-switch'
                                    label='LGBTQIA'
                                />
                            </Col>


                            <Col>
                                <FormCheck
                                    id='asian-owned'
                                    className='ownerType-switch'
                                    value='Asian'
                                    type='switch'
                                    label='Asian'
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
                                    onChange={(e) => setField('businessWebsiteLink', e.target.value)}
                                    onFocus={(e) => setField('businessWebsiteLink', e.target.value)}
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
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
