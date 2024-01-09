import { useState } from "react"
import './Slider.css'

export default function Slider()
{
    function changeSlide(e){
        let slideNo = Number(e.target.classList.value)
        setIndex(slideNo)
    }

    function nextPage(){
        index < 2 ? setIndex(index+1) : setIndex(0)
    }

    function prevPage(){
        index > 0 ? setIndex(index-1) : setIndex(2)
    }

    const [index, setIndex] = useState(0)
    let data = [{title:"Available on Every Device", firstLine: 'Eduko is available on Mobile and Desktop Devices', secondLine:'The most advanced system to make the course presence on the Web and Mobile devices.'},
                {title:'Online Assignment Submission', firstLine:'Forget the paper work', secondLine:'The integrated API helps the students to manage their assignments online'},
                {title:'Best Platform to Manage the Course', firstLine:'Manage your classes with online presence', secondLine:'Create your own course and make it more productive'}]
    return (
        <div className="slider-container">
            <button className="slider-buttons" onClick={nextPage}>&lt;</button>
            <Slide data={data[index]}></Slide>
            <button className="slider-buttons" onClick={prevPage}>&gt;</button>
            <ul className="slider-controls">
                <li className="0" onClick={changeSlide}></li>
                <li className="1" onClick={changeSlide}></li>
                <li className="2" onClick={changeSlide}></li>
            </ul>
        </div>
    )
}

function Slide(props)
{
    return (<>
        <div>
            <h2>{props.data.title}</h2>
            <p>{props.data.firstLine}</p>
            <p>{props.data.secondLine}</p>
        </div>
        
    </>)

}