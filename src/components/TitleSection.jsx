import { Link } from 'react-router-dom'

export default function TitleSection(props){

    let css = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return(
        <div className='register-title-section' style={css}>
            <Link to={'/'} className='login-title'>EDUKO</Link>
            <h3>{props.text}</h3>
        </div>
    )
    
}