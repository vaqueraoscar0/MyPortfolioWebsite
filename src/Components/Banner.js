import {Col, Row} from "react-bootstrap";
import headerImg from '../Assets/img/hhh Background Removed.png'
import {useEffect, useState} from "react";
import 'animate.css'
import TrackVisibility from "react-on-screen";
import {ProfileDescription} from './ProfileData/UserInfo'

export default function Banner(){
    const toRotate = ['Frontend', 'Backend', 'Software Engineer', 'Full Stack']
    const [isDeleting, setIsDeleting] = useState(false);
    const [isReadMore, setIsReadMore] = useState(false)
    const [isExpand, setIsExpand] = useState('Read More')
    const [loopNum, setLoopNum] = useState(0)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(250 - Math.random() * 50);
    const period = 1000;

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setDelta(250)
        }
    }

    const setExpand = () =>{
        setIsReadMore(!isReadMore);
        if(isReadMore){
            setIsExpand('Read More')
        }else{
            setIsExpand('Read Less')
        }
    }



    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])


    return(
        <section className={'banner'} id={'home'}>
            <Row className={'align-items-center justify-content-center w-auto m-0 p-0 ps-5'}>
                <Col xs={12} md={5} xl={5} className={'p-0 m-0 banner-introduction'}>
                    <TrackVisibility>
                        {({ isVisible}) =>
                            <div className={isVisible? "animate__animated animate__fadeIn" : ""}>
                                <span className={'tagline'}>Welcome to my Portfolio</span>
                                <h1>Hi</h1>
                                <h1>I'm Oscar,</h1>
                                <h1><span className={'wrap'}>{text}</span></h1>
                                <div>
                                    <p className={isReadMore? 'readOpen': 'readClose'}>{ProfileDescription}</p>
                                    <button onClick={setExpand} className={'expandBttn'}>{isExpand}</button>
                                </div>
                            </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={6} className={'p-0 m-0'}>
                    <img src={headerImg} alt={'Heagder Img'} className={'header-img'} style={{opacity: '0.8'}}/>
                </Col>
            </Row>
        </section>
    )
}