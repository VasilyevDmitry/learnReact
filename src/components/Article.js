
import React from 'react'
// import listArticle from '../listArticle'


export default function Article ({listArticle}) {

     const userName = listArticle.map(listArticle =>
     <li>{listArticle.type}</li>
     );
return(
    <ul>{userName}</ul>
)

}
