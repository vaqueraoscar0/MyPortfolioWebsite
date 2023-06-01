import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../Assets/img/logochip.png";
import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/*<MailchimpForm />*/}
                    <div style={{height: "100px"}}></div>
                    <Col size={12} sm={6}>
                        <img src={logo} alt={"Logo"} className={'chipLogo'} />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <div className={'social-icon'}>
                                <a href={"https://www.linkedin.com/in/oscar-vaquera/"} alt={"LinkedIn"}><FaLinkedin className={'Fa'}/></a>
                                <a href={"https://github.com/vaqueraoscar0"} alt={"Github"}><FaGithub className={'Fa'} /></a>
                                <a href={"https://www.youtube.com/@lo-fimusiccafe9849"} alt={"Youtube"}><FaYoutube className={'Fa'} /></a>
                            </div>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
