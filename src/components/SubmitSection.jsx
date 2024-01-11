import { Link } from "react-router-dom"
import './SubmitSection.css'

export default function SubmitSection(props){
    return (
        <div className='submit-section'>
            <Link to={props.data.path}>{props.data.text}</Link>
            <button>{props.data.button}</button>
        </div>
    )
}