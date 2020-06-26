
import React ,{useState}  from 'react'
import Article from './article'

const ArticleList  = function() {

    const [articlelist,modify_article] = useState([1,3,5,5,2,6])

    return (
        <div className="article_list">
            <div>
                <h1>Article Panel</h1>
            </div>
        {articlelist.map((each,index)=>  <Article key={index}/>)}

        </div>
    )
}
export default ArticleList;