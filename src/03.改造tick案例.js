//将函数转换成类
// 1. 创建一个名称扩展为 React.Component 的ES6 类
// 2. 创建一个叫做render()的空方法
// 3. 将函数体移动到 render() 方法中
// 4. 在 render() 方法中，使用 this.props 替换 props
// 5. 删除剩余的空函数声明
// import React from 'react'
// class Tick extends React.Component{
//     constructor(){
//         super()//因为使用了extends所以必须使用super
//         this.state = {//添加一个局部状态
//             timer:new Date().toLocaleTimeString()
//         }
//     }
//     changeState(){
//         //设置一个定时器，每秒调用一次
//         this.interval = setInterval(()=>{
//             //改变状态
//             this.setState({
//                 timer:new Date().toLocaleTimeString()
//             })
//         },1000)
//     }
//     //钩子函数
//     componentDidMount(){//组件已经挂载
//         //当组件挂载 调用函数 更新时间
//         this.changeState()
//     }
//     componentWillUnmount(){//组件即将卸载
//         //当组件即将卸载 清除定时器
//         clearInterval(this.interval)
//     }
//     render(){//钩子函数 进行diff算法 更新虚拟dom
//         return (
//             <fieldset>
//                 <legend>时间嘀嗒嘀嗒地过去了</legend>
//                 <h1>北京时间：</h1>
//                 <h1>{this.state.timer}</h1>
//             </fieldset>
//         )
//     }
// }
// export default Tick

//2.
import React from "react"
class Tick extends React.Component{
    constructor(){
        super()
        this.state={
            timer:new Date().toLocaleTimeString()
        }
    }
    //自定义函数：需手动调用
    changeState(){
        this.interval = setInterval(()=>{
            this.setState({
                timer:new Date().toLocaleTimeString()
            })
        },1000)
    }
    //钩子函数
    componentDidMount(){//组件已经挂载
        this.changeState()
    }
    componentWillUnmount(){//组件即将卸载
        clearInterval(this.interval)
    }
    render(){
        return (
            <h1>{this.state.timer}</h1>
        )
    }
}
export default Tick