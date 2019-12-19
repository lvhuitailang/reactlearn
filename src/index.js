import React from "react"
import ReactDOM from "react-dom"
import Hello from "@/component/Hello"
import ComList from '@/component/ComList'

let myDiv = <div>
    这是一个jsx组件
    <Hello {...{name:'wolfie',age:19}}></Hello>
    <ComList></ComList>



</div>;

ReactDOM.render(myDiv,document.getElementById('app'));