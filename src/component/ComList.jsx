import React from 'react'

import Content from '@/component/Content'

class CompList extends React.Component{
    constructor() {
        super();
        this.state = {
            commentList:[
                {id:1,name:'张三',content:'张三的评论信息'},
                {id:2,name:'李四',content:'李四的评论信息'},
                {id:3,name:'王五',content:'王五的评论信息'},
                {id:4,name:'赵六',content:'赵六的评论信息'},
                {id:5,name:'周七',content:'周七的评论信息'},
            ]
        }
    }
    render(){

        return <div>
            {this.state.commentList.map(item=>{
            return <Content key={item.id} {...this.state.commentList}></Content>
        })}
        </div>




    }
}
export default CompList;