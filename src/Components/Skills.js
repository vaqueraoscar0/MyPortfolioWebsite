import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../Assets/img/color-sharp.png'
import colorSharp2 from '../Assets/img/color-sharp2.png'
import TextShpere from "./TextSphere";
import {SKillProgress} from "./SKillProgress";
import TrackVisibility from "react-on-screen";

export default function Skills(){
    const [radius, setRadius] = useState(350)

    const handleResize = () => {
        if (window.screen.width <= 800 && window.screen.width >= 650) {
            setRadius(250)
        }else if(window.screen.width <= 650 && window.screen.width >= 400){
            setRadius(200)
        }else if(window.screen.width <= 400){
            setRadius(150)
        }else {
            setRadius(350)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <section className={'skill'} id={"skills"}>
            {/*<TrackVisibility>*/}
            {/*        <Row className={"p-0 m-0"}>*/}
            {/*            <Col xs={12} md={12} xl={6} className={"m-0 p-0"}>*/}
            {/*                <div className={'skill-bx'}>*/}
            {/*                    <h2>Skills:</h2>*/}
            {/*                    <div className={'skill-box-border'}>*/}
            {/*                        <Carousel responsive={responsive} infinite={true} autoPlay={true} className={'Skill-box-slider'}>*/}
            {/*                            <div className={'SPB'}>*/}
            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Web Development</h5>*/}
            {/*                                    <h5>78%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={78} color={'yellow'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>JavaScript</h5>*/}
            {/*                                    <h5>75%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={75} color={'cyan'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>HTML/CSS</h5>*/}
            {/*                                    <h5>80%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={80} color={'purple'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>React</h5>*/}
            {/*                                    <h5>70%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={70} color={'red'}/>*/}
            {/*                            </div>*/}


            {/*                            <div className={'SPB'}>*/}
            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>C/C++</h5>*/}
            {/*                                    <h5>55%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={55} color={'yellow'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Swift</h5>*/}
            {/*                                    <h5>58%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={58} color={'cyan'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Python</h5>*/}
            {/*                                    <h5>81%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={81} color={'purple'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>UX/UI</h5>*/}
            {/*                                    <h5>25%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={25} color={'red'}/>*/}
            {/*                            </div>*/}

            {/*                            <div className={'SPB'}>*/}
            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Java</h5>*/}
            {/*                                    <h5>75%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={75} color={'yellow'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>MySQL</h5>*/}
            {/*                                    <h5>43%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={43} color={'cyan'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>MongoDB</h5>*/}
            {/*                                    <h5>52%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={52} color={'purple'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>PostgresSQL</h5>*/}
            {/*                                    <h5>20%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={20} color={'red'}/>*/}
            {/*                            </div>*/}

            {/*                            <div className={'SPB'}>*/}
            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Git</h5>*/}
            {/*                                    <h5>60%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={60} color={'yellow'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>PHP</h5>*/}
            {/*                                    <h5>56%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={56} color={'cyan'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Jira</h5>*/}
            {/*                                    <h5>32%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={32} color={'purple'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Redux</h5>*/}
            {/*                                    <h5>55%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={55} color={'red'}/>*/}
            {/*                            </div>*/}

            {/*                            <div className={'SPB'}>*/}
            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>NodeJS</h5>*/}
            {/*                                    <h5>75%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={75} color={'yellow'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Django</h5>*/}
            {/*                                    <h5>70%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={70} color={'cyan'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Bootstrap</h5>*/}
            {/*                                    <h5>74%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={74} color={'purple'}/>*/}

            {/*                                <div className={'skill-item'}>*/}
            {/*                                    <h5>Github</h5>*/}
            {/*                                    <h5>50%</h5>*/}
            {/*                                </div>*/}
            {/*                                <SKillProgress done={50} color={'red'}/>*/}
            {/*                            </div>*/}
            {/*                        </Carousel>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </Col>*/}
            {/*            <Col  md={12} xl={6} className={"m-0 p-0 w-auto"}>*/}
            {/*                <TextShpere/>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*</TrackVisibility>*/}
            <TrackVisibility>
                <div className={"skill-main"}>
                    <div className={"skill-col1"}>
                        <div className={'skill-bx'}>
                            <h2>Skills:</h2>
                            <div className={'skill-box-border'}>
                                <Carousel responsive={responsive} infinite={true} autoPlay={true} className={'Skill-box-slider'}>
                                    <div className={'SPB'}>
                                        <div className={'skill-item'}>
                                            <h5>Web Development</h5>
                                            <h5>78%</h5>
                                        </div>
                                        <SKillProgress done={78} color={'yellow'}/>

                                        <div className={'skill-item'}>
                                            <h5>JavaScript</h5>
                                            <h5>75%</h5>
                                        </div>
                                        <SKillProgress done={75} color={'cyan'}/>

                                        <div className={'skill-item'}>
                                            <h5>HTML/CSS</h5>
                                            <h5>80%</h5>
                                        </div>
                                        <SKillProgress done={80} color={'purple'}/>

                                        <div className={'skill-item'}>
                                            <h5>React</h5>
                                            <h5>70%</h5>
                                        </div>
                                        <SKillProgress done={70} color={'red'}/>
                                    </div>


                                    <div className={'SPB'}>
                                        <div className={'skill-item'}>
                                            <h5>C/C++</h5>
                                            <h5>55%</h5>
                                        </div>
                                        <SKillProgress done={55} color={'yellow'}/>

                                        <div className={'skill-item'}>
                                            <h5>Swift</h5>
                                            <h5>58%</h5>
                                        </div>
                                        <SKillProgress done={58} color={'cyan'}/>

                                        <div className={'skill-item'}>
                                            <h5>Python</h5>
                                            <h5>81%</h5>
                                        </div>
                                        <SKillProgress done={81} color={'purple'}/>

                                        <div className={'skill-item'}>
                                            <h5>UX/UI</h5>
                                            <h5>25%</h5>
                                        </div>
                                        <SKillProgress done={25} color={'red'}/>
                                    </div>

                                    <div className={'SPB'}>
                                        <div className={'skill-item'}>
                                            <h5>Java</h5>
                                            <h5>75%</h5>
                                        </div>
                                        <SKillProgress done={75} color={'yellow'}/>

                                        <div className={'skill-item'}>
                                            <h5>MySQL</h5>
                                            <h5>43%</h5>
                                        </div>
                                        <SKillProgress done={43} color={'cyan'}/>

                                        <div className={'skill-item'}>
                                            <h5>MongoDB</h5>
                                            <h5>52%</h5>
                                        </div>
                                        <SKillProgress done={52} color={'purple'}/>

                                        <div className={'skill-item'}>
                                            <h5>PostgresSQL</h5>
                                            <h5>20%</h5>
                                        </div>
                                        <SKillProgress done={20} color={'red'}/>
                                    </div>

                                    <div className={'SPB'}>
                                        <div className={'skill-item'}>
                                            <h5>Git</h5>
                                            <h5>60%</h5>
                                        </div>
                                        <SKillProgress done={60} color={'yellow'}/>

                                        <div className={'skill-item'}>
                                            <h5>PHP</h5>
                                            <h5>56%</h5>
                                        </div>
                                        <SKillProgress done={56} color={'cyan'}/>

                                        <div className={'skill-item'}>
                                            <h5>Jira</h5>
                                            <h5>32%</h5>
                                        </div>
                                        <SKillProgress done={32} color={'purple'}/>

                                        <div className={'skill-item'}>
                                            <h5>Redux</h5>
                                            <h5>55%</h5>
                                        </div>
                                        <SKillProgress done={55} color={'red'}/>
                                    </div>

                                    <div className={'SPB'}>
                                        <div className={'skill-item'}>
                                            <h5>NodeJS</h5>
                                            <h5>75%</h5>
                                        </div>
                                        <SKillProgress done={75} color={'yellow'}/>

                                        <div className={'skill-item'}>
                                            <h5>Django</h5>
                                            <h5>70%</h5>
                                        </div>
                                        <SKillProgress done={70} color={'cyan'}/>

                                        <div className={'skill-item'}>
                                            <h5>Bootstrap</h5>
                                            <h5>74%</h5>
                                        </div>
                                        <SKillProgress done={74} color={'purple'}/>

                                        <div className={'skill-item'}>
                                            <h5>Github</h5>
                                            <h5>50%</h5>
                                        </div>
                                        <SKillProgress done={50} color={'red'}/>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className={"skill-col2"}>
                        <TextShpere screen={radius}/>
                    </div>
                </div>
            </TrackVisibility>



            <img src={colorSharp} className={'background-image-left'} alt={'img5'}/>
            <img src={colorSharp2} className={'background-image-left2'} alt={'img5'}/>

        </section>
    )
}