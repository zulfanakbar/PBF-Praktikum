import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './components/HelloComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HelloComponent from "./component/HelloComponent";
// import StateFullComponent from "./container/StateFullComponent";
import LoginComponent from "./components/LoginComponent";

ReactDOM.render(<LoginComponent />, document.getElementById('root'));

// class StateFullComponent extends React.Component {
//   render() {
//     return <p>Statefull Component</p>;
//   }
// }

// const HelloComponent = () => {
//   return <p>Hello Component</p>
// }

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
