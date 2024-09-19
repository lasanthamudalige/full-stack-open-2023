import Part from './Part'

const Content = ({ course }) => {

	return (
		<>
			{course.parts.map(part =>
				// Make part components for  each course(course name and no of exercises) and pass id as the key of the part
				<Part key={part.id} id={part.id} name={part.name} exercises={part.exercises} />
			)}
		</>
	)
}

export default Content
