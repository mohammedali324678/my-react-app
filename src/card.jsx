function Card(props){
    return (
        <div>---
            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <p>{props.college}</p>

        </div>
    )
}
export default Card