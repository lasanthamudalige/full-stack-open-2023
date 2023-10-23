const Person = ({ id, name, number, deletePerson }) => {
    return (
        // pass the id to the prop as key (for mapping) and call delete function and pass id to it when the the user click delete button 
        <p key={id}>{name} {number} <button onClick={() => deletePerson(id)}>delete</button></p>
    )
}

export default Person