import React from 'react'
import Recomended_developer from '../components/content/recommended_developer'
import Article_list from '../components/content/articleList'

const home_page = function(){
    return (
        <React.Fragment>
            <Recomended_developer/>
            <Article_list/>

        </React.Fragment>
    )
}

export default home_page;