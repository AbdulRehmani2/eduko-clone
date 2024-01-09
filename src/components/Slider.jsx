import { useState } from "react"
import './Slider.css'
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'


export default function Slider()
{
    const [index, setIndex] = useState(0)
    function nextPage(){
        index < 2 ? setIndex(index+1) : setIndex(0)
    }

    function prevPage(){
        index > 0 ? setIndex(index-1) : setIndex(2)
    }

    let data = [{title:"Available on Every Device", firstLine: 'Eduko is available on Mobile and Desktop Devices', secondLine:'The most advanced system to make the course presence on the Web and Mobile devices.', image:slide1},
                {title:'Online Assignment Submission', firstLine:'Forget the paper work', secondLine:'The integrated API helps the students to manage their assignments online', image:slide2},
                {title:'Best Platform to Manage the Course', firstLine:'Manage your classes with online presence', secondLine:'Create your own course and make it more productive', image:slide3}]
    return (
        <div className="slider-container" style={{backgroundImage: `url(${data[index].image})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', filter:'brightness(90%)'}}>
            <button className="slider-buttons" onClick={nextPage}>&lt;</button>
            <Slide data={data[index]}></Slide>
            <button className="slider-buttons" onClick={prevPage}>&gt;</button>
        </div>
    )

    function Slide(props)
    {
        function changeSlide(e){
            let slideNo = Number(e.target.classList.value)
            setIndex(slideNo)
            let elements = document.querySelectorAll('.slider-controls>li')
            e.target.style.backgroundColor = 'white'
        }

        return (<>
            <div className="slide-container">
                <h1>{props.data.title}</h1>
                <p>{props.data.firstLine}</p>
                <p>{props.data.secondLine}</p>
                <ul className="slider-controls">
                    <li className="0" onClick={changeSlide}></li>
                    <li className="1" onClick={changeSlide}></li>
                    <li className="2" onClick={changeSlide}></li>
                </ul>
            </div>
        </>)
    }
}

