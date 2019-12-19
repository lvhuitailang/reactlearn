import React from 'react'

import contentCss from '@/css/content.scss'

function Content(props){
console.log(props)
    return <div className={contentCss['content-item']}>
        <h1>评论人:{props.name}</h1>
        <p>评论内容:{props.content}</p>
    </div>;


}

export default Content;