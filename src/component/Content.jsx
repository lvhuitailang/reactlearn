import React from 'react'

function Content(props){
console.log(props)
    return <div>
        <h1>评论人:+{props.name}</h1>
        <p>评论内容:+{props.content}</p>
    </div>;


}

export default Content;