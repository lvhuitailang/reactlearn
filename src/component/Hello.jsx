import React from 'react'
export default class Hello extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div><h3>这是一个hello组件---{this.props.name}</h3></div>

    }


}