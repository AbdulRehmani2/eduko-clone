import { useState, useEffect } from "react"
import './Slider.css'
import slide1 from '../assets/slide1.png'
import slide3 from '../assets/slide2.png'
import slide2 from '../assets/slide3.png'


export default function Slider()
{
    const [index, setIndex] = useState(0)

    function nextPage(){
        setIndex((index + 1) % data.length)
    }
    
    function prevPage(){
        setIndex(index != 0 ? index - 1 : data.length - 1);
    }

    useEffect(() => {
        const interval = setInterval(nextPage, 5000);
        return () => clearInterval(interval);
    }, [index])

    let data = [{title:"Available on Every Device", firstLine: 'Eduko is available on Mobile and Desktop Devices', secondLine:'The most advanced system to make the course presence on the Web and Mobile devices.', image:slide1, index:0},
                {title:'Online Assignment Submission', firstLine:'Forget the paper work', secondLine:'The integrated API helps the students to manage their assignments online', image:slide2, index:1},
                {title:'Best Platform to Manage the Course', firstLine:'Manage your classes with online presence', secondLine:'Create your own course and make it more productive', image:slide3, index:2}]
    return (
        <div className="slider-container" style={{backgroundImage: `url(${data[index].image})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundColor:'#3F51B5'}}>
            <button className="slider-buttons" onClick={prevPage}>&lt;</button>
            <Slide data={data[index]}></Slide>
            <button className="slider-buttons" onClick={nextPage}>&gt;</button>
        </div>
    )
    
    function Slide(props)
    {
        function changeSlide(e){
            let slideNo = Number(e.target.id)
            setIndex(slideNo)
        }

        return (<>
            {}
            <div className="slide-container">
                <h1>{props.data.title}</h1>
                <p>{props.data.firstLine}</p>
                <p>{props.data.secondLine}</p>
                <ul className="slider-controls">
                    <li className={props.data.index == 0 ? 'active' : 'notActive'} id="0" onClick={changeSlide}></li>
                    <li className={props.data.index == 1 ? 'active' : 'notActive'} id="1" onClick={changeSlide}></li>
                    <li className={props.data.index == 2 ? 'active' : 'notActive'} id="2" onClick={changeSlide}></li>
                </ul>
            </div>
        </>)
    }
}