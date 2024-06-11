import { Button } from "react-bootstrap"

const ButtonComponent = ({variant,onClick, text})=>{
    return(
        <Button variant={variant} onClick={onClick}>{text}</Button>
    )

}

export default ButtonComponent