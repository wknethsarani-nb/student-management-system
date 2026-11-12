
function Student(props) { //props mean send data from one component to another component.
    return (
        <div>
            <h3>Student Name:{props.name}</h3>
        </div>
    );
}

export default Student;
