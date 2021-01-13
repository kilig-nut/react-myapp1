import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './20.烧开水/Calculator';
// import Boilingverdict from './20.烧开水/Boilingverdict';
// import Selector2 from './18.select受控2';
// import H2 from './19.非受控组件&ref2';
// import H from './19.非受控组件&ref';
// import G from './17.受控组件';
// import Selector from './18.select受控';
// import F from './16.列表&keys';
// import E from './15.运算符';
// import D from './14.toggle案例';
// import C from './13.阻止组件渲染';
// import PreventDe from './11.阻止默认事件';
// import B from './12.注册事件';
// import Tick from './03.改造tick案例';
// import Click from './06.阻止默认行为';
// import Parent from './07.props的只读性';
// import T from './09.更新状态';
// import T2 from './10.props';
// import Com from './01.jsx';
// import Merge from './App.js';
// import Comment from "./02.练习提取组件"
import reportWebVitals from './reportWebVitals';

// const comment = {
//   date: new Date().toLocaleTimeString(),
//   text: '我希望你能愉快的学习react',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
//定义组件的默认props
// Comment.defaultProps = comment;

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// 组件名称要大写！