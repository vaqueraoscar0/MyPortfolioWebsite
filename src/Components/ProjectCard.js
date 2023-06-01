import {Col} from "react-bootstrap";

export default function ProjectCard({title, description, imgUrl, link}){

    const redirect = () =>{
        window.open(link, '_blank');
    }

    return(
        <Col sm={6} md={4} className={'project-col'}>
            <div className={'proj-imgbx'} onClick={redirect}>
                <img src={imgUrl} alt={'project'}/>
                <div className={'proj-txtx'}>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}