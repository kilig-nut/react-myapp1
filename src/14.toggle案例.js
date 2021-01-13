import React from "react"
const html1 = <h1>尊敬的VIP会员，您好</h1>
const html2 = <h1>你我本无缘，全靠你花钱</h1>
class D extends React.Component{
    constructor(){
        super()
        this.state = {
            isCharge:true
        }
    }
    handleClick(){
        this.setState({
            isCharge:!this.state.isCharge
        })
        console.log("handleClick");
    }
    render(){
        let {isCharge} = this.state
        // console.log(this.state);//{isCharge:true}
        // console.log(this.state.isCharge);//true
        // console.log(isCharge);//undefined
        // console.log({isCharge});//{isCharge:undefined}
        return (
            <fieldset>
                {isCharge?html1:html2}
                <button onClick={this.handleClick.bind(this)}>{isCharge?"点击退钱":"点击充值"}</button>
            </fieldset>
        )
    }
}
export default D