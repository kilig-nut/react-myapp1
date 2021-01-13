import React from "react"
class Selector2 extends React.Component{
    constructor(){
        super()
        this.state = {
            val:"1"
        }
    }
    handleChange(e){
        console.log(e.target.value);
        this.setState({
            val:e.target.value
        })
    }
    render(){
        return (
            <select value={this.state.val} onChange={this.handleChange.bind(this)}>
                <option value="1">马嘉祺</option>
                <option value="2">丁程鑫</option>
                <option value="3">宋亚轩</option>
                <option value="4">刘耀文</option>
                <option value="5">张真源</option>
                <option value="6">严浩翔</option>
                <option value="7">贺峻霖</option>
            </select>
        )
    }
}
export default Selector2