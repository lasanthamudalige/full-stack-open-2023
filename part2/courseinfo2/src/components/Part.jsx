const Part = (props) => {
    const { id, name, exercises } = props

    return (
        <p key={id}>{name} {exercises}</p>
    )
}

export default Part