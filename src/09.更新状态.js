import React,{Component} from "react"
class T extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"宋亚轩",
            person:{
                hobby:"唱歌",
                sing:"夜空中最亮的星"
            }
        }
    }
    componentDidMount(){
        this.setState({//this.setState的状态更新是异步的
            name:"时代少年团",
            person:{
                hobby:"唱歌1"//更改之后仅有hobby:"唱歌1",因为person地址直接被修改
            }
        })
        console.log(this.state.name);//宋亚轩
        this.setState((preState,preProps)=>{
            console.log(preState);//{name:"时代少年团"}
        })
    }
    render(){//进行diff算法 更新虚拟dom
        return (
            <h1>{this.state.name}</h1>
        )
    }
}
export default T
//更新状态需要注意的三个问题：
//1.不要直接更新状态
    //如果直接使用this.state来改变状态，状态确实会被改变，但是视图不会更新
    //因为没有触发render函数
    //想要更新视图就必须触发render钩子函数
    //如何触发render钩子函数
    //1.props更新
    //2.this.setState
    //不要在render函数中使用this.setState否则回造成死循环
//2.状态更新可能是异步的
    //如果需要通过更新后的状态来计算下一个状态，需要在setState中传入函数
//3.状态更新是浅合并
    //直接将栈里的地址换掉
    // {//旧
    //     name:"宋亚轩",
    //     person:{
    //         name:"宋亚轩1"
    //     }
    // }
    // {//新
    //     name:"TNT",//TNT替换掉宋亚轩的地址
    //     person:{//不进行属性的比较，直接换掉person的地址
    //         name:"宋亚轩2"
    //     }
    // }
    //深合并：不修改地址，只改属性
    //内存栈和堆，栈中存放引用数据类型地址，堆里存放真正的数据