import React from "react"
class F extends React.Component{
    constructor(){
        super()
        this.state = {
            tnt : ["马嘉祺","丁程鑫","宋亚轩","刘耀文","张真源","严浩翔","贺峻霖"]
        }
    }
    render(){
        let {tnt} = this.state
        let lis = tnt.map((item,index)=><li key={index}>{item}</li>)
        return (
            <ul>
                {lis}
            </ul>
        )
    }
}
export default F