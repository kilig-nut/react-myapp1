let convertFn = {
    toCelsius(fahrenheit){//转换成摄氏度，需传入华氏度
        return (fahrenheit-32)*5/9
    },
    toFahrenheit(celsius){//转换成华氏度，需传入摄氏度
        return (celsius*9/5)+32
    }
}
function tryConvert(temperature,convert){//温度 转换函数
    //如果不是数字或者是空字符串
    if(Number.isNaN(temperature)||temperature==""){
        return '';
    }
    const input = parseFloat(temperature)//变成浮点数
    const output = convertFn[convert](input);//调用函数并传参
    const rounded = Math.round(output*1000)/1000;//保留三位小数
    return rounded.toString()
}
export default tryConvert