import React, { useState } from 'react';
import './App.css';
import { TabBar, TabName } from './components/TabBar';
import { Blog } from './components/Blog';
import { AboutMe } from './components/AboutMe';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';

function App() {
  return (
    <Router>
      <TabBar/>
      <Layout>
        <Routes>
          <Route path={'/'} element={<AboutMe/>}/>
          <Route path={'/aboutme'} element={<AboutMe/>}/>
          <Route path={'/blog'} element={<Blog/>}>
            <Route path={':postName'} element={<Blog/>}/>
          </Route>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/projecthighlights'} element={<Projects/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
