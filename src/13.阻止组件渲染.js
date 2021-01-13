import React from "react"
class C extends React.Component{
    render(){
        if(this.props.flag){
            return (
                <h1>哈哈</h1>
            )
        }else{
            return null//阻止组件渲染
            //但是钩子函数依旧会执行
        }
    }
}
export default C