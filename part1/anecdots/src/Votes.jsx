const Votes = (props) => {
    const points = props.points
    const itemIndex = props.selected

    return (
        // If vote == 1 render "vote" else render "votes" 
        <>
            <p>Has {points[itemIndex]} {points[itemIndex] === 1 ? <>vote</> : <>votes</>}</p>
        </>
    )
}

export default Votes