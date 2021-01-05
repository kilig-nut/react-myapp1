import React from 'react';
import ReactDOM from 'react-dom';
// import PreventDe from './11.阻止默认事件';
import B from './12.注册事件';
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
    <B />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// 组件名称要大写！