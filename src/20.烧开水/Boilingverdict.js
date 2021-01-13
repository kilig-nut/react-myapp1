function Boilingverdict(props){
    if(props.celsius>=100){
        return <h1>水烧开了</h1>
    }else{
        return <h1>水凉凉</h1>
    }
}
export default Boilingverdict