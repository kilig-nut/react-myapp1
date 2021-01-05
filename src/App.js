import { Fragment } from "react"

function Welcome(props){
    return (
        <h1>Hello,{props.name}</h1>
    )
}

function merge(){
    return (
        <Fragment>
            <Welcome name="宋亚轩"/>
            <Welcome name="刘耀文"/>
        </Fragment>
    )
}
export default merge