const Total = (props) => {
    const course = props.course

    // Get a new array for exercises 
    const exerciseArray = course.parts.map((course) => course.exercises)
    // Add them together using reduce function
    const totalExercises = exerciseArray.reduce((total, exerciseAmount) => total + exerciseAmount)

    return (
        <>
            <p>Number of exercises {totalExercises}</p>
        </>
    )
}

export default Total
