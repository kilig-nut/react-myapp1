function PreventDe(){
    return (
        <a href="#" onClick={(e)=>{
            console.log("阻止跳转");
            e.preventDefault()
        }}>点击</a>
    )
}
export default PreventDe