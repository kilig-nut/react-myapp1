import React from "react"
let scaleName = {
    c:"摄氏度",
    f:"华氏度"
}
class Temperatureinput extends React.Component{
    inputChange(e){
        this.props.onTemperatureChange(e.target.value)//调用父组件传递的函数，传递输入框的值
    }
    render(){
        // let {scale} = this.props;
        let scale = this.props.scale;
        console.log(this.props);
        return (
            <fieldset>
                <legend>input:{scaleName[scale]}</legend>
                <input type="text" onChange={this.inputChange.bind(this)} value={this.props.temperature}/>
            </fieldset>
        )
    }
}
export default Temperatureinput