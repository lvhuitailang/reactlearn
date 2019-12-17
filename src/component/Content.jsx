import React from 'react'

function Content(props){

    return <div>
        <h1>评论人:+this.props.name</h1>
        <p>评论内容:+this.props.content</p>
    </div>;


}

export default Content;