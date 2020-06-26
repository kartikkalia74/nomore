import React from 'react';
import logo from './logo.svg';
import './index.css'
import './App.css'
import {Router,BrowserRouter,Route,Switch} from  'react-router-dom'
import Header from './components/headers/header'
import Content from './components/content/content'
import Skill_headers from './components/content/skill_headers' 
import  Homepage from './navpages/homePage'
import Recomended_developer from './components/content/recommended_developer'
import Navbar from './components/navbar/navbar'
import Article_list from './components/content/articleList'
import chat_Page from './navpages/chatPage'
function App() {
  return (
    <div className="App">
     
      {/* <Content/> */}
      <BrowserRouter>
      <Header />
      <Navbar/>

      <div id="content" className="content">
      
      
      <Route path='/' exact component={Homepage}/>
      <Route path="/chat" component={chat_Page}/>
      {/* <Recomended_developer/>
      < Article_list/> */}
    
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
