import { Component } from "react";
import React from "react"
class T2 extends React.Component{
    constructor(props){
        //但是在构造器中无法直接使用，否则是undefined
        //必须接收props
        console.log(props.name);//宋亚轩
        super()
    }
    render(){
        //在render函数中可以直接使用传递过来的props
        return (
            <h1>{this.props.name}</h1>
        )
    }
}
export default T2