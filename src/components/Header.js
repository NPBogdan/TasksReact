import PropTypes from "prop-types"
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('eventMerge');
    }
    return (
        <header className='header'>
            <h1>{title}</h1>    
            <Button color='red' text='Bogdan' onClick={onClick}></Button>        
        </header>
    )
}

Header.defaultProps = {
    title:'TaskTraker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const style = {
//     color:'red',
//     backgroundColor:'black'
// }”

export default Header
