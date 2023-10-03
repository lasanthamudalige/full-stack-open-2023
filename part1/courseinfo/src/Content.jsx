const Content = (props) => {
    const course = props.course
    
    return (
        <>
            {course.parts.map(part => {
                return (
                    // Make 'p' tags for  each course(course name and no of exercises) and pass array index as the key of the part
                    <p key={course.parts.indexOf(part)}>{part.name} {part.exercises}</p> 
                )
            })}
        </>
    )
}

export default Content