//import PropTypes from 'prop-types'

function  Student(props)
{
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Std: {props.isStd ? "yes" : "no"}</p>
            
        </div>
    );
}
/*Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStd: PropTypes.bool,
}*/
export default Student