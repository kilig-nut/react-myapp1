//受控组件：表单数据由react处理
//非受控组件：表单数据由dom处理
//使用ref从dom中获取表单数据
import React from "react"

//ref作用在render函数中获取元素的真实dom
//ref作用在子组件上可获得子组件的实例
//ref不能作用在函数组件上 因为函数组件没有自己的状态
class Child extends React.Component{
    constructor(){
        super()
        this.state = {
            msg:"在汪洋的世界里面，还好能和你遇见"
        }
    }
    render(){
        return (
            <fieldset>
                <legend>child</legend>
                <h1>{this.state.msg}</h1>
            </fieldset>
        )
    }
}
class H2 extends React.Component{
    constructor(){
        super()
        this.ref = React.createRef()//创建ref
        this.childRef = React.createRef()
    }
    handleClick(){
        // console.log(this.ref);//{current:input}
        this.ref.current.focus()
    }
    handleChange(){
        console.log(this.childRef.current);
        this.childRef.current.state.msg="世界颠倒也要陪你走更远，一起航向梦闪耀的彼岸"
        this.setState({})
    }
    render(){
        return (
            <fieldset>
                <legend>非受控组件&ref</legend>
                <input type="text" ref={this.ref}/>
                <button onClick={this.handleClick.bind(this)}>点击使输入框获得焦点</button>
                |
                <button onClick={this.handleChange.bind(this)}>点击更改子组件状态</button>
                <Child ref={this.childRef}/>
            </fieldset>
        )
    }
}
export default H2