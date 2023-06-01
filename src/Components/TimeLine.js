import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import timelineElements from "./ProfileData/TimeLineElements";
import { ReactComponent as WorkIcon } from "../Assets/img/work.svg";
import { ReactComponent as SchoolIcon } from "../Assets/img/school.svg";
import 'react-vertical-timeline-component/style.min.css';
import '../App.css'

export const TimeLine = () => {
    let workIconStyles = { background: "cyan" };
    let schoolIconStyles = { background: "rgb(68, 255, 224)" };


    return (
        <section className={'timeLine'} id={'timeline'}>
            <div className={'bodyTimeLine'}>
                <h1 className="title">Timeline</h1>
                <VerticalTimeline>
                    {timelineElements.map((element, idx) => {
                        let isWorkIcon = element.icon === "work";
                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== "";

                        return (
                            <VerticalTimelineElement
                                key={idx}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="description" className={'description-box'}>{element.description}</p>
                                {showButton && (
                                    <a
                                        className={`button ${
                                            isWorkIcon ? "workButton" : "schoolButton"
                                        }`}
                                        href={element.link}
                                    >
                                        {element.buttonText}
                                    </a>
                                )}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>

            </div>
        </section>



    )
}
