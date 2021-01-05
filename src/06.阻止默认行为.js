// function Click(){
//     function handleClick(e){
//         e.preventDefault()
//         console.log("The link was clicked");
//     }
//     return (
//         <a href="#" onClick={handleClick}>Click me!</a>
//     )
// }
// export default Click
function Click(){
    function handleClick(e){
        e.preventDefault()
        console.log("The link was clicked");
    }
    return (
        <a href="#" onClick={handleClick}>Click me</a>
    )
}
export default Click