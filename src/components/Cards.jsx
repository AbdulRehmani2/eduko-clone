import './Cards.css'
import { Link } from 'react-router-dom'
import image from '../assets/course.jpg'

export default function Cards()
{
    let data = [{title:'Artificial Intelligence', teacher:'Samyan Qayyum Wahla', year:'Fall 2023', description:'This course introduces representations, techniques, and architectures used to build applied...'},
                {title:'Data Structures and Algorithms Lab (CS A,B)', teacher:'Nazeef Ul Haq', year:'Fall 2023', description:'...'}, 
                {title:'Data Structures and Algorithms', teacher:'Nazeef Ul Haq', year:'Fall 2023', description:'The course introduces the theory of complexity and abstract data structures as basic building..' , link:'/2061'},
                {title:'Final Year Project(2020)', teacher:'Samyan Qayyum Wahla', year:'Spring 2023', description:'The main objective of the final year project is to provide students with a design experience in...'}]
    return (
        <div className="cards-container">
            <Card data={data[0]} link={'/2061'}></Card>
            <Card data={data[3]}></Card>
            <Card data={data[2]}></Card>
            <Card data={data[1]}></Card>
        </div>
    )
}

function Card(props)
{
    return (
        <div className="card-container">
            <img src={image}></img>
            <div className="card-text-container">
                <h3>{props.data.title}</h3>
                <h4>{props.data.teacher}</h4>
                <h4>{props.data.year}</h4>
                <p>{props.data.description}</p>
                <button><Link to={props.link}>READ MORE</Link></button>
            </div>
        </div>
    )
}