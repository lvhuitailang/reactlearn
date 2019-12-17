import React from 'react'

import helloCss from '@/css/hello.css'

export default class Hello extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div><h3 className={helloCss.title1}>这是一个hello组件---{this.props.name}</h3></div>

    }


}