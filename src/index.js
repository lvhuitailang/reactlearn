import React from "react"
import ReactDOM from "react-dom"
import Hello from "@/component/Hello"

let myDiv = <div>
    这是一个jsx组件
    <Hello {...{name:'wolfie',age:19}}></Hello>



</div>;

ReactDOM.render(myDiv,document.getElementById('app'));