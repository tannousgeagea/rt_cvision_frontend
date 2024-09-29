import React from 'react';
import './App.css'
import HomePage from './pages/home/home';
import WelcomePage from './pages/welcome/welcom-page';
import ServicePage from './pages/service/service';
import ProcessorPage from './pages/processor/processor';
import ProcessorParamsPage from './pages/params/update-params';
import ServiceParamsPage from './pages/params/service-params';
import Layout from './components/ui/common/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/client" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path='params' element={<ServiceParamsPage />} />
          <Route path='services/:processorName' element={<ProcessorPage />} />
          <Route path='params/:processorName' element={<ProcessorParamsPage />} />
          <Route path="models" />
          <Route path="deploy" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;