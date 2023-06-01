import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import '../App.css'
import {TagCloudOptions} from "@frank-mayer/react-tag-cloud";

const TextShpere = ({screen}) => {
    // useEffect(() => {
    //     return () => {
    //         const container = ".tagcloud";
    //         const texts = [
    //             "HTML",
    //             "CSS",
    //             "C/C++",
    //             "JavaScript",
    //             "React",
    //             "Java",
    //             "Bootstrap",
    //             "NodeJS",
    //             "Django",
    //             "Jquery",
    //             "ES6",
    //             "GIT",
    //             "GITHUB",
    //             "Redux",
    //             "SQL",
    //             "NoSQL",
    //             "MongoDB",
    //             "MySQL",
    //             "PostgresSQL",
    //             "REST API",
    //             "Jira",
    //             "Swift",
    //             "Python",
    //             "Mongoose",
    //             "Express.js",
    //             "MERN",
    //             'MVC',
    //             'PHP'
    //         ];
    //
    //         const options = {
    //             radius: Math.min(500, window.innerWidth, window.innerHeight) / 2,
    //             container: container,
    //             maxSpeed: "normal",
    //             initSpeed: "normal",
    //             keep: true,
    //         };
    //
    //         TagCloud(container, texts, options);
    //     };
    //
    // }, []);

    return (
        <div className="text-shpere">
            {/*<span className="tagcloud"/>*/}
            <TagCloud
                options={(w: Window & typeof globalThis): TagCloudOptions => ({
                    radius: screen,
                    maxSpeed: "fast",
                    initSpeed: "normal",
                    keep: true,
                })}
            >
                {[
                    "HTML",
                    "CSS",
                    "C/C++",
                    "JavaScript",
                    "React",
                    "Java",
                    "Bootstrap",
                    "NodeJS",
                    "Django",
                    "Jquery",
                    "ES6",
                    "GIT",
                    "GITHUB",
                    "Redux",
                    "SQL",
                    "NoSQL",
                    "MongoDB",
                    "MySQL",
                    "PostgresSQL",
                    "REST API",
                    "Jira",
                    "Swift",
                    "Python",
                    "Mongoose",
                    "Express.js",
                    "MERN",
                    'MVC',
                    'PHP'
                ]}
            </TagCloud>
        </div>
    );
};

export default TextShpere;