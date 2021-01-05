//有状态组件
//无状态组件:自己没有状态，比如函数组件
function Com(props){
    return (
        <fieldset>
            <legend>jsx</legend>
            <h1>夏夜里风轻吹</h1>
            <h1>{props.name}</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </fieldset>
    )
}
export default Com