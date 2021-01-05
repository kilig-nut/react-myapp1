import React from "react"
class B extends React.Component{
    constructor(){
        super()
        //第三种方法需要用这种方式绑定this
        this.handleClick2 = this.handleClick2.bind(this)
        this.state={
            name:"时代少年团"
        }
    }
    handleClick(num,e){
        console.log(num);
        console.log(e);//无论参数顺序是什么，event对象总是默认在所有参数的最后
        this.setState({
            name:"宋亚轩"
        })
    }
    handleClick2(){
        this.setState({
            name:"碗盆"
        })
    }
    render(){
        return (
                <div>
                    {/* 第一种方法 */}
                    <h1 onClick={console.log("我是第一种方法")}>刘耀文</h1>
                    {/* 第二种方法 */}
                    <h1 onClick={this.handleClick.bind(this,999)}>{this.state.name}</h1>
                    {/* 第三种方法 */}
                    <h1 onClick={this.handleClick2}>{this.state.name}</h1>
                </div>
        )
    }
}
export default B