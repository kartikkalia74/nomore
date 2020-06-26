import React from 'react'

const Article = function (){

let date =  new Date()
console.log(date,typeof date)
    return (
        <div className="article">
            <div>
                <h1>Heading for article</h1>
            </div>
            <div>
                <p>content of the article with details with images code everything in the artile you get each and every details of the article it will increase your knowledge and help you to use this knowledge in your life</p>
                
            </div>
            <div className="l">
               <li>kartik kalia</li> 
               <li>{date.toDateString()}</li> 
                
            </div>
        </div>
    )
}

export default Article;