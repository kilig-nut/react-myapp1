import React from "react"
class G extends React.Component{
    constructor(){
        super()
        this.state={
            val:"请输入..."
        }
    }
    handleClick(e){
        this.setState({
            val:e.target.value
        })
        console.log(e.target.value);
    }
    render(){
        return (
            <input type="text" value={this.state.val} onChange={this.handleClick.bind(this)}/>
        )
    }
}
export default G