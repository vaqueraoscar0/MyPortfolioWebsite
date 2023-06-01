import React from "react";
import '../App.css'

export const SKillProgress = ({done, color}) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
            background: color
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div className="skill-progress" >
            <div className="progress-done" style={style}/>
        </div>
    )
}
