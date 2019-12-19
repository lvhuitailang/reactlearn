import React from 'react'

export default class EventBind extends React.Component{
    constructor() {
        super();
        this.state={
            msg:"哈哈"
        }
    }

    render(){
        return <div>
            <button onClick={()=>{this.show()}}>EventBind</button>
            <hr/>
            <input type="text" value={this.state.msg} onChange={(e)=>{this.textChange(e)}}/>
        </div>


    }
    show=()=>{
        console.log('You clicked me!')
    }

    textChange=(e)=>{
        console.log(e.target);
        this.setState({msg:e.target.value});


    }



}