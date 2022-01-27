import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TabBar, TabName } from './components/TabBar';
import { BlogTab } from './components/BlogTab';
import { HomeTab } from './components/HomeTab';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TabBar/>
      <Layout>
        <Routes>
          <Route path={'/'} element={<HomeTab/>}/>
          <Route path={'/aboutme'} element={<HomeTab/>}/>
          <Route path={'/blog'} element={<BlogTab/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
