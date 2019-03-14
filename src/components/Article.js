
import React,{Component} from 'react'

import PostData from '../data/listArticle.json'



class Article extends Component {
    render(){
        return (
            <div>
                {PostData.map((postDetail,indexs,arr)=>{
                    return <div>{postDetail.type}</div>
                })};
            </div>
        )
    }

}


export default Article
