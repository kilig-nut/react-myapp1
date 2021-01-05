const Child = props => {
    console.log(props.gift.name);
    props.gift.name = "爆米花"
    return (
        <h1>{props.gift.name}</h1>
    )
}
const Parent = props => {
    return (
        <Child gift={{name:"宋亚轩"}}/>
    )
}
export default Parent