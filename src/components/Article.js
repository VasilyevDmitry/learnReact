
import React from 'react'
// import listArticle from '../listArticle'


export default function Article ({listArticle}) {

     const userName = listArticle.map(listArticle =>
     <div>{listArticle.type}</div>
     );
return(
    <div>{userName}</div>
)

}
