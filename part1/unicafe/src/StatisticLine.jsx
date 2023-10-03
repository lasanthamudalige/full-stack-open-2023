const StatisticLine = (props) => {
    const text = props.text
    const value = props.value

    return (
        <>
            <td>
                {text}
            </td>
            <td>
                {value}
            </td>
        </>
    )
}

export default StatisticLine