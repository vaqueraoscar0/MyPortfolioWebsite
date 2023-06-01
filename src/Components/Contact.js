import {useState} from "react";
import {Col, Row} from "react-bootstrap";
import MapComponent from "./MapComponent";


export default function Contact(){
    const formInitialDetails ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setButtonText('Sending...')
        let response = await fetch('https://contact-form-handle.herokuapp.com/contact', {
            method: 'Post',
            headers: {
                'Content-Type': 'Application/json;charset=utf-8',
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText('Send')
        let result = response
        setFormDetails(formInitialDetails);
        if(result.status === 200){
            setStatus({success: true, message: 'Message sent Successfully!'});
        }else{
            setStatus({success: false, message: 'something went wrong, please try again later.'})
        }
    }


    return(
        <section className={"contact"} id={'connect'}>
            <Row className={'justify-content-center align-items-center w-auto contact-main'}>
                <Col xs={10} md={5} xl={5}>
                    <h2>Get in Touch</h2>
                    <Row>
                        {
                            status.message &&
                            <Col>
                                <p className={status.success === false ? 'danger' : 'success'} >{status.message}</p>
                            </Col>
                        }
                    </Row>

                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className={'px-1'}>
                                <input type={'text'} value={formDetails.firstName} placeholder={'First Name'} onChange={(e) => onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className={'px-1'}>
                                <input type={'text'} value={formDetails.lastName} placeholder={'Last Name'} onChange={(e) => onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className={'px-1'}>
                                <input type={'email'} value={formDetails.email} placeholder={'Email'} onChange={(e) => onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className={'px-1'}>
                                <input type={'tel'} value={formDetails.phone} placeholder={'Phone Number'} onChange={(e) => onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col size={12} className="px-1">
                                <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type={"submit"}><span>{buttonText}</span></button>
                            </Col>
                        </Row>

                    </form>
                </Col>
                <Col xs={10} md={5} xl={6}>
                    <MapComponent className={'mapContainer'}/>
                </Col>
            </Row>
        </section>
    )
}