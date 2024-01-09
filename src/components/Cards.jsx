import './Cards.css'
import image from '../assets/course.jpg'

export default function Cards()
{
    return (
        <div className="cards-container">
            <Card></Card>
        </div>
    )
}

function Card(props)
{
    return (
        <div className="card-container">
            <img src={image}></img>
            <div className="card-text-container">
                <h2>Artificial Intelligence</h2>
                <h4>Nazeef</h4>
                <h4>2022</h4>
                <p>Hello this is Nazeef</p>
                <button>Read More</button>
            </div>
        </div>
    )
}