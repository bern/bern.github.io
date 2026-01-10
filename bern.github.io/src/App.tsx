import './App.css';
import { TabBar } from './components/TabBar';
import { Blog } from './components/Blog';
import { AboutMe } from './components/AboutMe';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { DrinkMix } from './components/DrinkMix/DrinkMix';
import Modal from 'react-modal';

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
          <Route path={'/projects'} element={<Projects/>}/>
          <Route path={'/drinkmix'} element={<DrinkMix/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
