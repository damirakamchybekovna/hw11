import classes from  './Card.module.css'

const Card = (props)=>{
return(
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>   // озунун стили бар и  props аркылуу стиль алат
)
}

export default Card