import React from "react"
class E extends React.Component{
    render(){
        let {messages} = this.props
        return (
            <fieldset>
                <h1>共有{messages.length>0 && messages.length}条信息未读</h1>
            </fieldset>
        )
    }
}
export default E