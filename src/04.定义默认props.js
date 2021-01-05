import React from "react"
class A extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    static defaultProps = {
        name="宋亚轩"
    }//使用static定义默认props
}
export default A