import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TabBar, TabName } from './components/TabBar';
import { BlogTab } from './components/BlogTab';
import { HomeTab } from './components/HomeTab';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TechnicalInterviewPost } from './components/Blog/Posts/TechnicalInterviewPost';
import { IVSPost } from './components/Blog/Posts/IVSPost';

function App() {
  return (
    <Router>
      <TabBar/>
      <Layout>
        <Routes>
          <Route path={'/'} element={<HomeTab/>}/>
          <Route path={'/aboutme'} element={<HomeTab/>}/>
          <Route path={'/blog'} element={<BlogTab/>}/>
          <Route path={'/blog/building-a-livestreamed-murder-mystery-game-with-amazon-ivs-and-timed-metadata'} element={<IVSPost/>}/>
          <Route path={'/blog/mastering-technical-interviews-a-human-approach'} element={<TechnicalInterviewPost/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
