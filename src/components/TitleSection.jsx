import { Link } from 'react-router-dom'

export default function TitleSection(props){

    let css = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return(
    <div className='title-section-container' style = {css}>
        <div className='register-title-section'>
            <Link to={'/'} className='login-title'>EDUKO</Link>
            <h3>{props.text}</h3>
        </div>
    </div>
    )
    
}