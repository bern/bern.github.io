import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TabBar } from './components/TabBar';
import { BlogTab } from './components/BlogTab';

function App() {
  return (
    <div>
      What do you want to know about me?
      <div>
        <TabBar></TabBar>
      </div>
      <div>
        <BlogTab/>
      </div>
      <div>
        Reading List
      </div>
      <div>
        Blog
      </div>
      <div>
        Project Highlights
      </div>
      <div>
        Language Study
      </div>
    </div>
  );
}

export default App;
