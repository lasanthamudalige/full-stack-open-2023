const Button = (props) => {
	const name = props.name
	const handleClick = props.handleClick

	return (
		<button onClick={handleClick}>{name}</button>
	)
}

export default Button
