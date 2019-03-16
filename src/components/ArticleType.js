
import React,{Component} from 'react'

import PostData from '../data/listArticle.json'
import '../style.css'



class ArticleType extends Component {
    render(){
        return (

            <div>
                {PostData.map((postDetail)=>{
                    return (
                        <div>
                            <div className="colorType">
                                {postDetail.type}
                            </div>
                            <div className="colorId">id:
                                {postDetail.id}
                            </div>
                            <div className="colorUrl">
                                {postDetail.url}
                            </div>
                        </div>
                    )
                })};
            </div>
        )
    }

}


export default ArticleType
