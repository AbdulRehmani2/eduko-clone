import { useState } from "react"

export default function Slider()
{
    const [index, setIndex] = useState(0)
    let data = [{title:"Available on Every Device", firstLine: 'Eduko is available on Mobile and Desktop Devices', secondLine:'The most advanced system to make the course presence on the Web and Mobile devices.'},
                {title:'Online Assignment Submission', firstLine:'Forget the paper work', secondLine:'The integrated API helps the students to manage their assignments online'},
                {title:'Best Platform to Manage the Course', firstLine:'Manage your classes with online presence', secondLine:'Create your own course and make it more productive'}]
    return (
        <div className="slider-container">
            <Slide data={data[index]}></Slide>
            <ul className="slider-controls">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

function Slide(props)
{
    return (<>
        <h2>{props.data.title}</h2>
        <p>{props.data.firstLine}</p>
        <p>{props.data.secondLine}</p>
    </>)

}