import React from 'react'
import Recomended_developer from '../components/content/recommended_developer'
import Article_list from '../components/content/articleList'

const home_page = function(){
    return (
        <div className="home">
            <Recomended_developer/>
            <Article_list/>
        </div>
            

        
    )
}

export default home_page;