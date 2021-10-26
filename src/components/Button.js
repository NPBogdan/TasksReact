import PropTypes from 'prop-types'

const Button = ({color,text,onCLick }) => {
    return (
        <button onClick={onCLick} className="btn" style={{backgroundColor:color}}>
            {text}
        </button>
        )
}

Button.defaultProps = {
    color:'red',
    text:'Petru'
}

Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string
}

export default Button
