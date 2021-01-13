import React from "react"
import Boilingverdict from "./Boilingverdict"
import Temperatureinput from "./TemperatureInput"
import tryConvert from "../utils/index"
class Calculator extends React.Component{
    constructor(){
        super()
        this.state={
            temperature:"",
            scale:"c"
        }
    }
    handleCelsiusChange(val){//摄氏度输入框
        console.log("c==="+val);
        this.setState({
            temperature:val,
            scale:"c"
        })
    }
    handleFahrenheitChange(val){//华氏度输入框
        console.log("f==="+val);
        this.setState({
            temperature:val,
            scale:"f"
        })
    }
    render(){
        let {scale,temperature} = this.state//let scale = this.state.scale
        //求摄氏度和华氏度
        let celsius = scale==="c" ? temperature : tryConvert(temperature,'toCelsius');
        let fahrenheit = scale==='f' ? temperature : tryConvert(temperature,'toFahrenheit');
        return (
            <div>
                <Temperatureinput scale={"c"} onTemperatureChange={this.handleCelsiusChange.bind(this)} 
                    temperature={celsius}/>
                <Temperatureinput scale={"f"} onTemperatureChange={this.handleFahrenheitChange.bind(this)} 
                    temperature={fahrenheit}/>
                <Boilingverdict celsius={this.state.temperature}/>
            </div>
        )
    }
}
export default Calculator