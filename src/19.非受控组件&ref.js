//点击按钮 Input输入框获得焦点
import React from "react"
class Child extends React.Component{
    constructor(){
        super()
        this.state = {
            msg:"狂风暴雨也要陪你走更远，一起航向梦闪耀的彼岸"
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
class H extends React.Component{
    constructor(){
        super()
        this.myRef = React.createRef()//创建一个ref
        this.childRef = React.createRef()//创建ref
    }
    handleClick(){
        this.myRef.current.focus()//获得焦点
    }
    handleChange(){
        console.log(this.childRef);
        this.childRef.current.state.msg = "就像船桨和风帆密不可分，乘着潮起潮涌勇敢去冒险"
        console.log(this.childRef);
        this.setState({})
    }
    render(){
        return (
            <fieldset>
                <legend>ref</legend>
                <input type="text" ref={this.myRef}/>
                <button onClick={this.handleClick.bind(this)}>点击获取焦点</button>
                <button onClick={this.handleChange.bind(this)}>改变child状态</button>
                <Child ref={this.childRef}/>
            </fieldset>
        )
    }
}
export default H
//通过ref操作dom
//1.如果作用在render函数中的元素上，那么可以获得该元素的真实dom
//2.如果作用在子组件上，那么可以获得子组件实例的引用 ref不能作用在函数组件，因为函数组件没有自己的状态

//render函数的作用：进行虚拟算法，更新虚拟dom