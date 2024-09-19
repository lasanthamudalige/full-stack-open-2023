const Total = ({ course }) => {

	// Get a new array for exercises
	const exerciseArray = course.parts.map((course) => course.exercises)
	// Add them together using reduce function
	const totalExercises = exerciseArray.reduce((total, exerciseAmount) => total + exerciseAmount)

	return (
		<p style={{ fontWeight: 'bold' }}>Total of {totalExercises} exercises</p>
	)
}

export default Total
