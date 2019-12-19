import React from "react"
import ReactDOM from "react-dom"
import Hello from "@/component/Hello"
import ComList from '@/component/ComList'

import EventBind from "@/component/EventBind";

let myDiv = <div>
    这是一个jsx组件
    <Hello {...{name:'wolfie',age:19}}></Hello>
    {/*<ComList></ComList>*/}
    <EventBind></EventBind>




</div>;

ReactDOM.render(myDiv,document.getElementById('app'));