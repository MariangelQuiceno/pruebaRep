import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../src/components/Pages/Home/Home';
import { Profile } from '../src/components/Pages/Profile/Profile';
import { Projects } from '../src/components/Pages/Projects/Projects';
import { References } from '../src/components/Pages/References/References';
import {Experience} from '../src/components/Pages/Experience/Experience'
import { HeaderPart } from "../src/Header/HeaderPart/HeaderPart";
import {IconFloat} from '../src/components/IconFloat/IconFloat';
import './App.css';

function App() {
  return (
    <div className='Father'>
      <HeaderPart />
      <IconFloat/>
      <div className='wrapper'>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/references" element={<References />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;



