import React from 'react'

import indexcss from '@/css/hello.css'


export default class Hello extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div><h3 className="title">这是一个hello组件---{this.props.name}</h3></div>

    }


}